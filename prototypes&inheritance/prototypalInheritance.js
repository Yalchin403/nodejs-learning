// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
//
// rabbit.__proto__ = animal; // (*)
//
// // we can find both properties in rabbit now:
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true

// let animal = {
//     eat () {
//         console.log("Animal eat");
//     }
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
// // walk is taken from the prototype
// rabbit.eat(); // Animal walk

// let animal = {
//     eats: true
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
//
//     if (isOwn) {
//         console.log(`Our: ${prop}`); // Our: jumps
//     } else {
//         console.log(`Inherited: ${prop}`); // Inherited: eats
//     }
// }


// let animal = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat();  // "this" refers to object before the dot
// console.log(animal.full);
// console.log(rabbit.full);

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

/*
Then this.stomach.push() needs to find stomach property and call push on it.
It looks for stomach in this (=speedy), but nothing found.
*/