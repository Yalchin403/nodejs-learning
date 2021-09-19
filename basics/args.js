// ... alternative to * in Python

function sumAll(...args){
    let sum = 0;
    console.log(typeof args)
    console.log(args)
    for (let arg of args){
        sum += arg;
    }

    return sum;
}

let sum_ = sumAll(1, -1, 9);
// console.log(sum_)


function showItems(){
    console.log(arguments);
    console.log(typeof arguments);
    for(let arg of arguments){
        console.log(arg);
    }
}

// showItems("Here is the first one", "And the second one goes here")

function newFunc(){
    let data = [];
    let newObj = () => { // arrow function will take arguments from outer function, they don't have their own
        for (let item of arguments) {
            data.push(item);
        }
        console.log(data);
    };
    newObj();
}

newFunc("Arg1", "Arg2", "..infinity")

// spread syntax
let arr = [1, 2, 6];
let maxValue = Math.max(...arr);  // will pass the array as 1, 2, 6
console.log(maxValue);

arr1 = arr;
arr2 = [...arr];
console.log(arr1 === arr);  // true
console.log(arr2 === arr);  // false
