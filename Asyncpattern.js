const fs = require('fs').promises
    // const util = require('util')

// const readfile = util.promisify(fs.readFile)
// const writeFile = util.promisify(fs.writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if (err)
//                 reject(err)
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async() => {
    try {
        const first = await fs.readFile('./test/first.txt', 'utf-8') //use readfile instead of readFile when using util
        const second = await fs.readFile('./test/second.txt', 'utf-8')
        await fs.writeFile('./test/mind-grenade.txt', `This is awesome: ${first},${second}`, 'utf-8', { flag: 'a' })
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start()
    //getText('./test/first.txt').then((result) => console.log(data)).catch((err) => console.log(err))