// let user = {
//     name: "John",
//     surname: "Smith"
// };

// add a getter function for getting fullname property

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
// console.log(user.fullName);

/*
for the code above we can't currently set any other value for fullName property
as it has only getter
*/

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ');
//     }
// };
// user.fullName = "Yalchin Mammadli"
// console.log(user.fullName);

// using Object.defineProperty()

let user = {
    name: "John",
    surname: "Smith"
}

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },
// Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.
    set(value) {
        [this.name, this.surname] = value.split(' ');
    },
    enumerable: true  // by default will be false and won't be seen in the keys
})

console.log(user.fullName)
console.log(Object.getOwnPropertyDescriptor(user, 'fullName'))

for (let key in user) {
    console.log(key);
}

