console.log("=============== Built in Module - OS =======================");

const { log } = require("console");
const os = require("os");

console.log(`Arch: ${os.arch()}`);
console.log(`CPU Information:`, os.cpus());
console.log(`Available Memory Information(in bytes):${os.freemem()}`);
console.log(`Total Memory(in bytes):${os.totalmem()}`);
console.log(`Host name:${os.hostname()}`);
console.log(`Platform Information: ${os.platform()}`);
console.log(`Release Information: ${os.release()}`);
console.log(`Operating System Type: ${os.type()}`);
console.log(`System Uptime(in second):${os.uptime()}`);
console.log(`User Information:`, os.userInfo());
