// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     // length property could just be added here as static property
// };

// let count = 0;
// for (let item in arrayLike){
//     count ++;
// }
// arrayLike['length'] = count;  // just to make the length property dynamic
// console.log(arrayLike.length);
// let arr = Array.from(arrayLike); // (*)
//
// console.log(arr);

// Array.from > can take additional mapping function
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
    // length property could just be added here as static property
};
let arr = Array.from(arrayLike, key => key + ' test'); // (*) additional map function can be added
console.log(arr);

// function slice(str, start, end) {
//     return Array.from(str).slice(start, end).join('');
// }
//
// let str = '𝒳😂𩷶';
//
// alert( slice(str, 1, 3) ); // 😂𩷶
//
// // the native method does not support surrogate pairs
// alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)