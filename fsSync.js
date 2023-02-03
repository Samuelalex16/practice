const fs = require('fs')
const path = require('path')


const first = fs.readFileSync(path.join(__dirname, 'test', 'first.txt'), 'utf-8')
const second = fs.readFileSync(path.join(__dirname, 'test', 'second.txt'), 'utf-8')

console.log(first, second);

fs.writeFileSync(path.join(__dirname, 'test', 'third.txt'), `The Third text file:${first},${second}`, { flag: 'a' })