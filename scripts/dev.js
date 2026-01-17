#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectDir = path.join(__dirname, '..', 'abhishek-singh-premium-web-presence-main', 'abhishek-singh-premium-web-presence-main');
const nodeModulesPath = path.join(projectDir, 'node_modules');

// Check if node_modules exists, if not, install dependencies
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Dependencies not found. Installing...');
  try {
    process.chdir(projectDir);
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully!\n');
  } catch (error) {
    console.error('❌ Error installing dependencies:', error.message);
    process.exit(1);
  }
}

try {
  process.chdir(projectDir);
  execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
  console.error('Error running dev server:', error.message);
  process.exit(1);
}
