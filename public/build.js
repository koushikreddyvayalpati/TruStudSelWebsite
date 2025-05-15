const fs = require('fs');
const path = require('path');

// Ensure phone4.png is available in the build directory
const sourcePath = path.join(__dirname, 'phone4.png');
const destPath = path.join(__dirname, '..', 'build', 'phone4.png');

if (fs.existsSync(sourcePath)) {
  console.log('Copying phone4.png to build directory...');
  fs.copyFileSync(sourcePath, destPath);
  console.log('Successfully copied phone4.png to build directory');
} else {
  console.error('Error: phone4.png not found in public directory');
} 