#!/usr/bin/env node
const { spawnSync } = require('child_process');
const os = require('os');
const isWindows = os.platform() === 'win32';
const ALLOWED_COMMANDS = new Set(['node', 'npm', 'pnpm', 'yarn', 'vercel']);
function log(msg) { console.error(msg); }
function commandExists(cmd) {
  if (!ALLOWED_COMMANDS.has(cmd)) throw new Error(`Command not in whitelist: ${cmd}`);
  try {
    if (isWindows) { return spawnSync('where', [cmd], { stdio: 'ignore' }).status === 0; }
    else { return spawnSync('sh', ['-c', `command -v "$1"`, '--', cmd], { stdio: 'ignore' }).status === 0; }
  } catch { return false; }
}
function getCommandOutput(cmd, args) {
  try {
    const result = spawnSync(cmd, args, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'], shell: isWindows });
    return result.status === 0 ? (result.stdout || '').trim() : null;
  } catch { return null; }
}
function main() {
  log('Vercel CLI Installation Script');
  if (commandExists('vercel')) {
    const version = getCommandOutput('vercel', ['--version']) || 'unknown';
    log(`Vercel CLI already installed: ${version}`);
    console.log(JSON.stringify({ status: 'already_installed' }));
    process.exit(0);
  }
  log('Installing Vercel CLI using npm...');
  const result = spawnSync('npm', ['install', '-g', 'vercel'], { stdio: 'inherit', shell: isWindows });
  if (result.status !== 0) { log('Installation failed'); process.exit(1); }
  if (commandExists('vercel')) {
    log('Vercel CLI installed successfully!');
    console.log(JSON.stringify({ status: 'success' }));
  } else {
    log('Error: Cannot find vercel after installation');
    process.exit(1);
  }
}
main();
