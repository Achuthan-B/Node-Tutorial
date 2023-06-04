const fs = require('fs/promises');

fs.readFile('./Content/first.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
