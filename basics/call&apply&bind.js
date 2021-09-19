function sayHi() {
    console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin

// pass additonal arguments to a function

function saySomething(phrase) {
    console.log(`${this.name} said: ${phrase}`);
}

let userObj = {"name": "mrRootLog", "surname": ""};
saySomething.call(userObj, "Random phrase goes here");

// using .apply

function randomFunc(num1, num2) {
    console.log(num1);
    console.log(num2);
}
randomFunc.apply(userObj, [1, 2])  // we give the args as an array at .apply will parse it on its own

// using .bind

function randomFunc2(num1, num2) {
    console.log(`${num1} and ${num2} goes here`);
}

caller = randomFunc2.bind(userObj, 19, 20);
caller();
// bind won't run the function directly but prepare it for the future
// the function as a copy