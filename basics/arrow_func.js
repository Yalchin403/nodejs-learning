// do remember arrow functions do not have this property and they take it from outside

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)
        );
    }
};

group.showList();


// let people = {
//     names: ["Adam", "Hannah"],
//     secretPhrase: "Here is a secret phrase",
//     func:  this.names.forEach(human => console.log(`${human} doesnt know ${this.secretPhrase}`))
// }
// people.func;  // can't read properties of undefined (reading forEach)

//  arrow functions also don't have arguments variable.

function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds