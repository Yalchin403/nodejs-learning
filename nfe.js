// // say my name!
//
// function sayMy() {
//     console.log("Heisenbug :)");
// }
//
// console.log(sayMy.name); // say my name
//
// let sayHi = function() {
//     console.log("Hi");
// };
//
// console.log(sayHi.name); // sayHi > smart
//
// let user = {
//
//     sayHi() {
//         // ...
//     },
//
//     sayBye: function() {
//         // ...
//     }
//
// }
//
// console.log(user.sayHi.name); // sayHi
// console.log(user.sayBye.name); // sayBye
//
//
// function ask(question, ...handlers) {
//     let isYes = true;
//
//     for(let handler of handlers) {
//         if (handler.length == 0) {
//             if (isYes) handler();
//         } else {
//             handler(isYes);
//         }
//     }
//
// }
//
// // for positive answer, both handlers are called
// // for negative answer, only the second one
// // ask("Question?", () => console.log('You said yes'), result => console.log(result));
//
// function saySomething() {
//     console.log("Something");
//
//     // let's count how many times we run
//     saySomething.counter++;
// }
// saySomething.counter = 0; // initial value
//
// saySomething(); // Hi
// saySomething(); // Hi
//
// console.log( `Called ${saySomething.counter} times` ); // Called 2 times
//
// function makeCounter() {
//
//     function counter() {
//         return counter.count++;
//     };
//
//     counter.set = function(value) {
//         count = value;
//     };
//     counter.decrease = function(value) {
//         count--;
//     }
//     return counter;
// }
//
// let counter = makeCounter();
// console.log(counter)


function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log( +sum(1)(2) ); // 3
console.log( +sum(5)(-1)(2) ); // 6
console.log( +sum(6)(-1)(-2)(-3) ); // 0
console.log( +sum(0)(1)(2)(3)(4)(5) ); // 15

















