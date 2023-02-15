const { readFile, writeFile } = require('fs')
const path = require('path')
readFile('./test/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }

    const first = result

    readFile('./test/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result

        writeFile('./test/Async.txt', `The Third text file:${first},${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})