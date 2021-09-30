#!/usr/bin/node
/* here is a basic syntax
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
 */

class User {
    constructor(name) {
        this.name = name;
    }
    // no comma between class methods
    sayHi() {
        console.log(this.name);
    }
}

// let user = new User("Yalchin403");  // should be called with 'new'
// user.sayHi();
//
//
// function makeClass(phrase) {
//     // declare a class and return it
//     return class {
//         sayHi() {
//             alert(phrase);
//         }
//     };
// }
//
// // Create a new class
// let User = makeClass("Hello");
//
// new User().sayHi(); // Hello


//getters & setters

class User2 {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name  // why the heck there is an underscore? explained at the end of the file
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value
    }
}

let user2 = new User2("Yalchin404")
console.log(user2.name);
user2.name = "";  // Name is too short


// class fields
// The important difference of class fields is that they are set on individual objects, not User.prototype
class User3 {
    name = "Yalchin405";

    sayHi() {
        console.log(`Hi, ${this.name}`);
    }
}

// Task

class Clock {

    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop = () => {
        clearInterval(this.timer);
    };

    start = () => {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };
}

let clock = new Clock({template: 'h:m:s'})
clock.start();

/*
Because by doing return this.a you're accesing the a property, which triggers the getter function,
which accesses the a property, which triggers the getter function, which accesses the a property,
which triggers the getter function... Endless loop.
 */