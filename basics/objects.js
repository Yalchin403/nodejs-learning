//let user = { "name": "Yalchin", age: 30};

//console.log("name" in user)
//user['status'] = "student";
//console.log(user)

//for (let k in user){
//    console.log(user[k], k);
//}

// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   // ..,
//   "1": "USA"
// };
//
// for (let code in codes) {
//     console.log(code);
// }


// let dict = {}
//
// function isEmpty(dict){
//     for (let key in dict){
//         return false;
//     }
//
//     return true;
// }
//
// console.log(isEmpty(dict))

// arr = ["a", "b"];
// obj = {};
//
// Object.assign(obj, arr)
// console.log(obj)

let user = {
  name: "Yalchin",
  sayHi : function (){
    console.log(`Hello ${this.name}`)
  },
};

user.sayHi();