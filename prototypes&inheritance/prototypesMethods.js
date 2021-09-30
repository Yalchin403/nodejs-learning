// __proto__ is outdated now

let animal = {
    eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal, {
    jumps: {
        value: "I jumped",
        enumerable: false
    }
});

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

// clone in more effective way

let clone = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal));
// all the things done here are the familar to the file named as
// propertyFlag&descriptors.js in this directory

