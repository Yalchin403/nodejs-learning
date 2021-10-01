#!/usr/bin/node


// class CoffeeMachine {
//     waterAmount = 0;
//
//     constructor(power) {
//         this.power = power;
//         console.log(`Coffee machine initialized with power of ${this.power}`)
//     }
// }
//
// let machine_instance = new CoffeeMachine(100);
// machine_instance.waterAmount = 200;  // can be accessed from outside

// protected version not in language level but convention between devs I mean _

// class CoffeeMachine {
//     _waterAmount = 0;
//
//     constructor(power) {
//         this._power = power;
//     }
//
//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }
//         this._waterAmount = value;
//     }
//
//     get waterAmount() {
//         return this._waterAmount
//     }
// }
//
//
// let machine_instance = new CoffeeMachine(100);
// machine_instance._waterAmount = 100;
// console.log(machine_instance.waterAmount);


// private method with #

class CoffeeMachine {
    #waterCapacity = 200;
    #waterAmount = 0;

    #normalizeWaterAmount (value) {
        if( value < 0) return 0;
        if( value > this.#waterCapacity) return this.#waterCapacity;
        return value;

    }

    #setWaterAmount(value) {
        this.#waterAmount = this.#normalizeWaterAmount(value);
    }

    getWaterAmount() {
        return this.#waterAmount
    }
}

let machine_instance = new CoffeeMachine();
machine_instance.#setWaterAmount(50);  // error
console.log(machine_instance.#getWaterAmount())  // error


/*
 Unlike protected ones (with undrscore), private fields are enforced by the language itself. That’s a good thing
 if we inherit from CoffeeMachine,
 then we’ll have no direct access to #waterAmount. We’ll need to rely on waterAmount getter/setter
 */

