function sayHi() {
    console.log('Hello');
}

setTimeout(sayHi, 1000);  // without arguments


function sayHiWI(name) {
    console.log(`${name}, hi!`);
    console.log("Works");

}

setTimeout(sayHiWI, 1000, "Random Name");  // with arguments

// create function inside setTimeout

setTimeout(() => console.log('Here is an entire function'), 1000);

// wrong!
// setTimeout(sayHi(), 1000)  // do not include paranthesis after a function name

// let timerId = setTimeout(...);
// clearTimeout(timerId);  // cancel timeout

// Set interval has the same syntax as setTimeout, the only difference is that
// it will run the code not once, but with the regular intervals

function sayBye() {
    console.log("BYE");
}

// setInterval(sayBye, 1000); // we can also do that by using nested setTimeouts


// writing function to print out from certain number to a certain number using setInterval
let timerId = setInterval((from, to) => {
    let current_number = from;
    while (current_number != to){
        console.log(current_number);
        current_number++;
    }
}, 2000, 2, 5);

setTimeout(() => clearInterval(timerId), 5000);

// writing the same function above using nested setTimeout

let timerId2 = setTimeout(function fromTo(from, to)  {
    let current_number = from;
    while (current_number != to) {
        console.log(current_number);
        current_number++;
    }
    timerId2 = setTimeout(fromTo, 2000);
}, 2000, 5, 11)

setTimeout(() => clearInterval(timerId2), 5000);


let i = 0;

setTimeout(() => console.log(i), 100); // will only be executed after the current code has finished

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
    i++;
}
