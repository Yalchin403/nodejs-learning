function sayHi() {
    phrase = "Hello";

    console.log(phrase);

    var phrase;  // doesn't matter where you declare
}
// sayHi();

sayHiWithLet = () => {
    phrase = "Hello with the let variable";
    console.log(pharase);

    let phrase;
}

// sayHiWithLet();  // error: ReferenceError: Cannot access 'phrase' before initialization

function sayHiFalse() {
    phrase = "Hello"; // (*)

    if (false) {
        var phrase;
    }

    console.log(phrase);
}
// sayHi();

function sayHi() {
    console.log(phrase);

    var phrase = "Hello";
}

// sayHi();  // undefined; declaration is hoisted, assigment isn't

// call an anonymous function directly (IIFE)

(function (){
    console.log("I don't need a name and to be called separately!");
})();

// even if there is a name we can't call it directly without paranthesis

// function callDirectly() {
//     console.log("I will throw an error to you");
// }(); // syntax error

(function callDirectly() {
    console.log("I won't throw an error to you");
})();