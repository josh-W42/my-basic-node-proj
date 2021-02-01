const myModule = require("./aModule");
const myThirdModule = require("./myOtherModule");

function main() {
    console.log("Hello, World");

    const sayHello = (name) => {
        console.log(`Hello, ${name}`);
    }

    sayHello("Francis");
    sayHello("Patrick");

    // console.log(myModule.square(2));
    // console.log(myModule.power(2, 5));
    
    myThirdModule.timeToday();
}

main();