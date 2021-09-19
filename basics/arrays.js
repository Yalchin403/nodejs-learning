// let fruits = []; // make an array
//
// fruits[99999] = 5; // assign a property with the index far greater than its length
//
// fruits.age = 25; // create a property with an arbitrary name
// console.log(fruits);

// fruits = ["Apple", "Orange", "Plum"];
//
// // iterates over array elements
// for (let fruit of fruits) {
//     console.log( fruit );
// }
//
// let arr = ["Apple", "Orange", "Pear"];
//
// for (let key in arr) {
//     console.log( arr[key] ); // Apple, Orange, Pear
// }

let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
})

arr[2](); // a,b,function(){...}