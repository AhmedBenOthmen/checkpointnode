const fs = require('fs');

const fileName = 'welcome.txt';
const fileContent = 'Hello Node';

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`File "${fileName}" created with content: "${fileContent}"`);
    
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log(`Data read from "${fileName}": ${data}`);
      }
    });
  }
});
