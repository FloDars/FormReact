
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms));

// const synchroneFunction = () => {
//     sleep(2000).then(() => {
//     console.log("end")
// })
// }
// synchroneFunction();
sleep(2000);
console.log("fin")
module.exports = {sleep};