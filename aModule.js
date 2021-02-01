// We're learning about importing modules.
// There are many ways to do this

const exportObj = {};

exportObj.square = x => {
    return x * x;
}

exportObj.power = (x, y) => {
    return Math.pow(x, y);
}

// You can use this, if you just want
// to use these functions.
// module.exports = { square, power }

// Or you can leave it out and the whole
// file will be transfered.

// Another way to do this is like:
// module.exports.myFunction = () => {
//     console.log("I'm another function");
// }
// but only if it's one single thing.


// One last other way to do this is to make
// an object then add properties then export
// the module add the end.
module.exportObj = exports;
