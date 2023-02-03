const names = require('./module1')
const sayHi = require('./module2')
const data = require('./altmodule')
console.log(data);
require('./mindgrenade')
sayHi('Popa')
sayHi(names.name1)
sayHi(names.name2)