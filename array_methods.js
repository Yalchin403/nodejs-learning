// let arr = ["I", "go", "home"];
//
// delete arr[1]; // remove "go"
//
// console.log( arr[1] ); // undefined
//
// // now arr = ["I",  , "home"];
// console.log( arr.length ); // 3
//
// let arr = ["I", "study", "JavaScript"];
//
// arr.splice(1, 1); // from index 1 remove 1 element
//
// alert( arr ); // ["I", "JavaScript"]

// let arr = ["I", "study", "JavaScript", "right", "now"];
//
// // remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");
//
// console.log( arr ) // now ["Let's", "dance", "right", "now"]

// let arr = ["I", "study", "JavaScript", "right", "now"];
//
// // remove 2 first elements
// let removed = arr.splice(0, 2);
//
// console.log( removed ); // "I", "study" <-- array of removed elements

// let arr = [1, 2];
//
// // create an array from: arr and [3,4]
// console.log( arr.concat([3, 4]) ); // 1,2,3,4
//
// // create an array from: arr and [3,4] and [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
//
// // create an array from: arr and [3,4], then add values 5 and 6
// console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
//
// console.log(arr);

// let arr = [1, 2];
//
// let arrayLike = {
//     0: "something",
//     length: 1
// };
//
// let arr1 = arr.concat(arrayLike); // 1,2,[object Object]
// console.log(arr1);

// let arr = [1, 2];
//
// let arrayLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };
//
// console.log( arr.concat(arrayLike) ); // 1,2,something,else

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
// });


// let users = [
//     {"id": 1, "name": "Yalchin"},
//     {"id": 2, "name": "SomeOneElse"},
//     {"id": 3, "name": "SomeOneElse2"}
// ]
//
// console.log(users.find(item => item["name"] == "Yalchin").name);


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];

// returns array of the first two users
// let someUsers = users.filter(item => item.id < 3);
//
// console.log(someUsers.length); // 2
// someUsers.forEach((item) => {
//     console.log(item.name)
// })

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6

// let arr = [ 1, 2, 15 ];
// console.log( arr );
// // the method reorders the content of arr
// arr.sort();
//
// console.log( arr );  // 1, 15, 2

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
//
// let arr = [ 1, 2, 15, 15, 2, -2, 7, 1, 1, 3, 2 ];
//
// arr.sort(compareNumeric);
//
// console.log(arr);  // 1, 2, 15

// let arr = [ 1, 2, 15, 15, 2, -2, 7, 1, 1, 3, 2 ];
//
// arr.sort(function(a, b) { return a - b; });
//
// console.log(arr);  // 1, 2, 15

// let arr = [ 1, 2, 15, 15, 2, -2, 7, 1, 1, 3, 2 ];
// console.log(arr.sort( (a, b) => a - b ));

// let names = 'Bilbo, Gandalf, Nazgul';
// names = names.split(',');
// for( name of names){
//     console.log(name);
// }

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// let
// str = arr.join(';'); // glue the array into a string using ;
//
// console.log( str ); // Bilbo;Gandalf;Nazgul

// let arr = [1, 2, 3, 4, 5];
//
// let result = arr.reduce((sum, current) => sum + current, 0);
//
// console.log(result); // 15

// let arr = [100, 2, 3, 4, 5];
//
// // removed initial value from reduce (no 0)
// let result = arr.reduce((sum, current) => sum + current);
//
// console.log( result ); // 15

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };
//
// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
// ];
//
// // find users, for who army.canJoin returns true
// let soldiers = users.filter(army.canJoin, army);
//
// console.log(soldiers.length); // 2
// console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23

// ---------------- Tasks -------------------


// function camelize(str){
//     let splittedArr = str.split('-');
//     for (let index=1; index < splittedArr.length; index++){
//         splittedArr[index] = splittedArr[index][0].toUpperCase() + splittedArr[index].slice(1);
//     }
//     let joinedStr = splittedArr.join('');
//     console.log(joinedStr);
// }
//
// camelize("lets-do-this-ninja")

function filterRange(arr, a, b){
    let newArr = arr.filter(item => item >= a && item < b);
    console.log(arr); // arr itself should not be modified...
    return newArr;

}

console.log(filterRange([1, 2, 3, 4, 99, 64, 12, 32], 2, 32));