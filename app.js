const fs = require('fs');

fs.readFile('./Content/first.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFile(
  './Content/second.txt',
  'Helloo this is the written text',
  { flag: 'a' },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('content written');
    }
  }
);

// fs.writeFileSync('./Content/second.txt', 'writing using synchronous 2');
const method1 = fs.readFileSync('./Content/second.txt', 'utf8');
console.log(method1);
