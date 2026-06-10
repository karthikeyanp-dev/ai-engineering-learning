#!/usr/bin/env node
const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const isWindows = os.platform() === 'win32';
function createSecureLogFile() {
  const tmpDir = path.join(process.cwd(), '.vercel-tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  return path.join(tmpDir, 'login.log');
}
const LOG_FILE = createSecureLogFile();
function log(msg) { console.error(msg); }
function commandExists(cmd) {
  try {
    if (isWindows) { return spawnSync('where', [cmd], { stdio: 'ignore' }).status === 0; }
    else { return spawnSync('sh', ['-c', `command -v "$1"`, '--', cmd], { stdio: 'ignore' }).status === 0; }
  } catch { return false; }
}
function getCommandOutput(cmd, args) {
  try {
    const result = spawnSync(cmd, args, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], shell: isWindows });
    return result.status === 0 ? (result.stdout || '').trim() : null;
  } catch { return null; }
}
function checkLoginStatus() {
  try {
    const result = spawnSync('vercel', ['whoami'], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], shell: isWindows });
    const output = (result.stdout || '').trim();
    if (result.status === 0 && output && !output.includes('Error') && !output.includes('not logged in')) {
      return output;
    }
  } catch {}
  return null;
}
function startBackgroundLogin() {
  const logStream = fs.openSync(LOG_FILE, 'w');
  const child = spawn('vercel', ['login'], { detached: true, stdio: ['ignore', logStream, logStream], shell: isWindows });
  child.unref();
  log(`Background login process started (PID: ${child.pid})`);
  return child.pid;
}
function openBrowser(url) {
  try {
    spawnSync('powershell', ['-Command', `Start-Process '${url}'`], { stdio: 'ignore', windowsHide: true });
    log('Browser opened automatically');
  } catch (error) {
    log('Please open the URL manually');
  }
}
async function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
async function waitForAuthUrl() {
  for (let i = 0; i < 40; i++) {
    await sleep(500);
    try {
      if (fs.existsSync(LOG_FILE)) {
        const content = fs.readFileSync(LOG_FILE, 'utf8');
        const match = content.match(/https:\/\/vercel\.com\/oauth\/device\?user_code=[A-Z0-9-]+/);
        if (match) return match[0];
      }
    } catch (e) {}
  }
  return null;
}
async function main() {
  log('Vercel CLI Login Authorization');
  const user = checkLoginStatus();
  if (user) {
    log(`Already logged in as: ${user}`);
    console.log(JSON.stringify({ status: 'already_logged_in', user }));
    process.exit(0);
  }
  log('Starting login...');
  startBackgroundLogin();
  const authUrl = await waitForAuthUrl();
  if (authUrl) {
    openBrowser(authUrl);
    log('Authorization URL: ' + authUrl);
    console.log(JSON.stringify({ status: 'needs_auth', auth_url: authUrl }));
  } else {
    log('Failed to get auth URL. Check: ' + LOG_FILE);
    try { log(fs.readFileSync(LOG_FILE, 'utf8')); } catch(e) {}
    process.exit(1);
  }
}
main();
