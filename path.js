const path = require('path');

console.log(path.sep);

const filePath = path.join('test', 'test1', 'test.txt')
console.log(`${path.sep}${filePath}`);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'test', 'test1', 'test.txt')
const collect = path.join(__dirname, filePath)
console.log(absolute);
console.log(collect);