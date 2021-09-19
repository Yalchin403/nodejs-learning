/*
Object properties, besides a value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 */

let userObj = {
    name: "Yalchin"
}

const descriptor = Object.getOwnPropertyDescriptor(userObj, "name");
console.log(descriptor);

//  to change flags

Object.defineProperty(userObj, "name", {
    value: "Yalchin",
    writable: true,
    enumerable: false,
    configurable: true  // if we don't provide anything for flags it will assume false for all of em
    }
);
console.log(Object.getOwnPropertyDescriptor(userObj, "name"));

//let's make obj non-writeable

let user = {
    name: "John",
    toString() {
        return this.name;
    }
}

// Object.defineProperty(user, "name", {
//     writable: false
// });

// user.name = "new name";
console.log(user);  // it doesn't change (will also throw error in strict mode)

for (let key in user) {
    console.log(key)  // in normal scenario, all of the properties will be listed, we can change it as below
};
console.log('----------------------');

Object.defineProperty(user, "name", {
    enumerable: false  // now name will also not be shown in Object.keys(user)
});

for (let key in user) {
    console.log(key);
};

console.log("------------------------------------");
//  analyze configurable a bit

Object.defineProperty(user, "name", {
    configurable: false  // non-configurable property can't be deleted or modified
});

delete user.name; // strict mode will throw an error saying => cannot delete property 'name' of [object Object]
console.log(Object.getOwnPropertyDescriptor(user, "name")); // all flags are false currently

Object.defineProperty(user, "name", {
    writable: true
});

user.name = "modified name";
console.log(user.name);  // for non-configurable property, to prevent modification we can change writable: true to false

/*
To be able to change flags of multiple properties, Ojbect.deineProperties() can be user
and its syntax is like beneath:
            Object.defineProperties(user, {
            name: { value: "John", writable: false },
            surname: { value: "Smith", writable: false },
            // ...
});
 */

/*
To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).

Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

        let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));


 */