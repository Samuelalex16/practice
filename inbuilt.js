const os = require('os');
const user = os.userInfo()
console.log(user);
console.log(`The uptime is :${os.uptime}`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}