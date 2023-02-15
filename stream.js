const fs = require('fs')
for (let i = 0; i < 100000; i++) {
    fs.writeFileSync('./test/big.txt', `Hello World ${i}\n`, { flag: 'a' })
}
// const stream = fs.createReadStream('./test/big.txt')

// stream.on('data', (result) => {
//     console.log(result);
// })
// stream.on('error', (err) => console.log(err))