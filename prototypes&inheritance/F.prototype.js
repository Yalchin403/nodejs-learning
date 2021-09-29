/*
Remember, new objects can be created with a constructor function, like new F().

If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.
 */

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
