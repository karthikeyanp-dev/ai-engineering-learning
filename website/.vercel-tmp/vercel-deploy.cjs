#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const isWindows = os.platform() === 'win32';
function log(msg) { console.error(msg); }
function detectPackageManager(projectPath) {
  if (fs.existsSync(path.join(projectPath, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(projectPath, 'yarn.lock'))) return 'yarn';
  return 'npm';
}
function main() {
  const projectPath = process.argv[2] || '.';
  const absPath = path.resolve(projectPath);
  log('========================================');
  log('Vercel CLI Project Deployment');
  log('========================================');
  log(`Project: ${absPath}`);
  log('');
  // Run build
  log('Running build...');
  const pkgManager = detectPackageManager(absPath);
  const buildArgs = pkgManager === 'npm' ? ['run', 'build'] : ['build'];
  const buildResult = spawnSync(pkgManager, buildArgs, { cwd: absPath, stdio: 'inherit', shell: isWindows });
  if (buildResult.status !== 0) {
    log('Build FAILED!');
    process.exit(1);
  }
  log('Build successful!');
  log('');
  // Deploy
  log('Deploying to Vercel (production)...');
  const result = spawnSync('vercel', ['--yes', '--prod'], {
    cwd: absPath,
    encoding: 'utf8',
    stdio: ['inherit', 'pipe', 'pipe'],
    timeout: 300000,
    shell: isWindows
  });
  const output = (result.stdout || '') + (result.stderr || '');
  log(output);
  if (result.status !== 0) {
    log('Deployment failed!');
    process.exit(1);
  }
  const aliasedMatch = output.match(/https:\/\/[a-zA-Z0-9.-]+\.vercel\.app/);
  const finalUrl = aliasedMatch ? aliasedMatch[0] : null;
  log('');
  log('========================================');
  log('Deployment successful!');
  if (finalUrl) log(`URL: ${finalUrl}`);
  log('========================================');
  console.log(JSON.stringify({ status: 'success', url: finalUrl }));
}
main();
