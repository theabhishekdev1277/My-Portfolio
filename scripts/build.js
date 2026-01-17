#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const projectDir = path.join(__dirname, '..', 'abhishek-singh-premium-web-presence-main', 'abhishek-singh-premium-web-presence-main');
const command = process.argv[2] || 'build';

try {
  process.chdir(projectDir);
  execSync(`npm run ${command}`, { stdio: 'inherit' });
} catch (error) {
  console.error(`Error running ${command}:`, error.message);
  process.exit(1);
}
