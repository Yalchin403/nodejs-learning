#!/usr/bin/node

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 5000); // (*)

}).then(function(result) { // (**)

    console.log(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    console.log(result); // 2
    return result * 2;

}).then(function(result) {

    console.log(result); // 4
    return result * 2;

});
console.log("Don't  mind me just watching :)")

// A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});

//  promise.then(f1).catch(f2);  error handled
//  promise.then(f1, f2);  error is not handled