const os = require('os');
const fs = require('fs');
const childProcess = require('child_process');

// Get information about the operating system
console.log('Operating System Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Free Memory:', os.freemem(), 'bytes');
console.log('Total Memory:', os.totalmem(), 'bytes');

// File system operations
const folderPath = 'C:/Users/Asad Bashir/Desktop/os check/';
try {
  // fs.mkdirSync(folderPath); // Create a new folder
  fs.writeFileSync(`${folderPath}/test.txt`, 'Hello, World!'); // Create a new file
  const filesInFolder = fs.readdirSync(folderPath); // Read files in the folder
  console.log('Files in the Folder:', filesInFolder);
} catch (err) {
  console.error('Error performing file system operations:', err);
}
fs.app


