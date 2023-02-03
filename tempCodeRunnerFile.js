writeFile('./node/test/Async.txt', `The Third text file:${first},${second}`, (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const third = result
})