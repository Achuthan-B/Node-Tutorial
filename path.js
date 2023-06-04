const path = require('path');

console.log(path.sep);

const filepath = path.join('/Content/', 'SubFolder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const abs = path.resolve(__dirname, '/Content/', 'SubFolder', 'test.txt');
console.log(abs);
