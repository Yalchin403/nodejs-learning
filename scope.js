// if variable declared inside a code block
// it will only be seen there

if (true){
    let randomVariable = "I will only live here..."
}
// console.log(randomVariable) // error: randomValue is not defined


function outerFunc(name, surname){
    function innerFunc(){
        console.log(`${name} ${surname}`);
    }
    innerFunc();
}

// outerFunc("Yalchin", "Mammadli");

let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";
sayHi(); // Hi, Pete


function makeWorker() {
    let name = "Pete";

    return function() {
        console.log(name);
    };
}

name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

counter = new Counter();
console.log(counter.up())

let x = 5;

// function func(){
//     console.log(x);
//     let x = 4;  // dead zone
// }
// func()

let arr_ = [1, 2, 3, , 5, 6, 7]

let inBetween = (number1, number2) => {
    return (x) => {
        if (number1 <= x && number2 >= x)
            return true;
        else return false;
    };
};

console.log(arr_.filter(inBetween(3, 6)));


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName){
    return function(obj1, obj2){
        return obj1.fieldName > obj2.fieldName ? 1 : -1;
    }
}

users.sort(byField("name"));
console.log(users);