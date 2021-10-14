#!/usr/bin/node

let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};

// usage:
class User {
    constructor(name) {
        this.name = name;
    }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

/*
inheritance and mixin can be done at the same time
class User extends Person {
  // ...
}

Object.assign(User.prototype, sayHiMixin);
 */