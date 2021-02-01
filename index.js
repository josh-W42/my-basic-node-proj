// Example 1
// const myModule = require("./aModule");
// const myThirdModule = require("./myOtherModule");

// function main() {
//     console.log("Hello, World");

//     const sayHello = (name) => {
//         console.log(`Hello, ${name}`);
//     }

//     sayHello("Francis");
//     sayHello("Patrick");

//     // console.log(myModule.square(2));
//     // console.log(myModule.power(2, 5));

//     myThirdModule.timeToday();
// }

// main();

// Example 2
// const fs = require("fs");


// fs.readFile("./games.txt", "utf8", (error, data) => {
//     if (error) {
//         console.log("An error has occured when reading the file ");
//     } else {
//         console.log("Anticpated Games:");
//         console.log(data);
//     }
// });


// Example 3
const moment = require("moment");

let date = moment("2021-02-01");
let addWeek = date.add(7, 'week');
console.log(date.format());
