const os = require('os');


// info about current user

// const user = os.userInfo()
// console.log(user);

// // systemUptime

// console.log(`the system uptime is ${os.uptime()}`);

// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalmem: os.totalmem(),
//     freemem: os.freemem(),

// }
// console.log(currentOs);

const free = os.freemem()

const totalmem = os.totalmem()

const remainMem = () =>{
    return totalmem - free
}

console.log(remainMem());