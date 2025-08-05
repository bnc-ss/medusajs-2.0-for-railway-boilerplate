const fs = require('fs');
const path = require('path');

console.log('Setting up @boxncase/framework module alias...');

// Create the @boxncase directory in node_modules
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
const boxncasePath = path.join(nodeModulesPath, '@boxncase');
const frameworkPath = path.join(boxncasePath, 'framework');

// Create directories if they don't exist
if (!fs.existsSync(boxncasePath)) {
  fs.mkdirSync(boxncasePath, { recursive: true });
}

// Remove existing symlink/directory if it exists
if (fs.existsSync(frameworkPath)) {
  fs.rmSync(frameworkPath, { recursive: true, force: true });
}

// Create symlink to the framework module
const sourcePath = path.join(process.cwd(), 'src', 'modules', 'framework');
fs.symlinkSync(sourcePath, frameworkPath, 'dir');

console.log('Framework module alias created successfully.');