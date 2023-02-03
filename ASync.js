const { readFile, writeFile } = require('fs')
const path = require('path')
readFile('./node/test/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }

    const first = result

    readFile('./node/test/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result

        writeFile('./node/test/Async.txt', `The Third text file:${first},${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})