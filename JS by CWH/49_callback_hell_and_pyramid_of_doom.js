import { readFile, writeFile } from 'fs';

readFile('file1.txt', function(err, data) {
    if (err) {
      console.error('Error reading file 1:', err);
    } else {
      readFile('file2.txt', function(err, data) {
        if (err) {
          console.error('Error reading file 2:', err);
        } else {
          writeFile('file3.txt', data, function(err) {
            if (err) {
              console.error('Error writing file 3:', err);
            } else {
              console.log('File 3 written successfully');
            }
          });
        }
      });
    }
  });
  