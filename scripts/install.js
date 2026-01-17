#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const projectDir = path.join(__dirname, '..', 'abhishek-singh-premium-web-presence-main', 'abhishek-singh-premium-web-presence-main');

try {
  process.chdir(projectDir);
  execSync('npm install', { stdio: 'inherit' });
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}
