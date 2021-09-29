let obj = {
    toString() {
        console.log("Peyser")
    }
};
console.log( obj ); // "[object Object]" or (in node js ) {}

// let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
console.log( arr.__proto__.__proto__.__proto__ ); // null


// Native prototypes can be modified. For instance, if we add a method to String.prototype,
// it becomes available to all strings:

String.prototype.customFunc = function () {
    console.log(this);
};
let randomString = "here is a random string";
randomString.customFunc();



// ----------------------  Tasks  -----------------------

Function.prototype.defer = function(ms) {
        setTimeout(this, ms);
};

f1 = function() {
    console.log("Hello World !")
}

f1.defer(1000);