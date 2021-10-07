#!/usr/bin/node

const fetch  = require('node-fetch');

fetch('https://no-such-domain.ml')  // no such a url
    .then(response => console.log(response.json()))
    .catch(
        err => console.log(err.message)  // error is successfully handled here
    )


/*
    If we throw an error inside catch block, it will look for next= close catch to handle it
    and if there is no catch, the other "then"s won't work
 */

// the execution: catch -> catch
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function(error) { // (*)

    if (error instanceof URIError) {
        // handle it
    } else {
        console.log("Can't handle such error");

        throw error; // throwing this or another error jumps to the next catch
    }

}).then(function() {
    console.log("this won't run")
    /* doesn't run here */
}).catch(error => { // (**)

    console.log(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way

});

// task

new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(err => console.log(err));  //won't handle the error

new Promise(function(resolve, reject) {
    setTimeout(() => {
        try {
            throw new Error("Whoops!");
        } catch(e) {
            reject(e)
        }
    }, 1000);
}).catch(err => console.log(err));  // will handle the error => read comment below

/*
Now the question is when does promise is consider rejected?
case 1 . The executer function is having synchronous code.
any error("exception") occurred here OR
any error thrown explicitly here OR
call to reject function ( like ex reject('my errr message '))

the promise is rejected;

case 2 . The executer function is having some async code.

if INSIDE the async code (ex setTimeout),you throw / or get any error it won't cause promise to be rejected.
if you want to reject the promise from inside async code, you need to call reject method . ( like ex reject('my errr message '))
 */

