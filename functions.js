"use strict";
function addFunction(n1, n2) {
    return n1 + n2;
}
//this way typescript cannot figure out the difference in
//parameters
//let addPointer: Function;
//we also have to define the return type of the function we
//are passing
var addPointer;
addPointer = addFunction;
console.log(addPointer(4, 6));
//callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 85, function (result) {
    console.log(result + 'hello');
});
