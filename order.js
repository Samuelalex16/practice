const fs = require('fs')
console.log("Starting the first task");
fs.readFile("./test/test1/test.txt", 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log("Completed first task");
})
console.log("starting next task");