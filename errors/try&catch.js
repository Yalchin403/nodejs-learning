#!/usr/bin/node

try {
    console.log("We all know about try catch, let's get into a bit depth");
} catch (err) {
    console.log(err);
    }

// For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

try {
    {{{{{{{{{{{{
    } catch (err) {
        console.log("The engine can't understand this code, it's invalid");
        }

// try...catch works synchronously

try {
    setTimeout(function() {
        noSuchVariable; // script will die here
    }, 1000);
} catch (err) {
    alert( "won't work" );
}


try {
    lalala; // error, variable is not defined!
} catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
}


// Optional “catch” binding

try {
    // ...
} catch { // <-- without (err)
          // ...
}

// throwing our own errors

let error = new Error("Things happen o_O");

console.log(error.name); // Error
console.log(error.message); // Things happen o_O

let json = '{ "age": 30 }'; // incomplete data



try {

    let user = JSON.parse(json); // <-- no errors

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // (*)
    }

    console.log( user.name );

} catch (err) {
    console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}


// rethrowing error

// Usually, we can check the error type using the instanceof operator:

try {
    user = { /*...*/ };
} catch (err) {
    if (err instanceof ReferenceError) {
        console.log('ReferenceError'); // "ReferenceError" for accessing an undefined variable
    }
}

// finally

try {
    console.log( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
    console.log( 'catch' );
} finally {
    console.log( 'finally' );
}

// The finally clause works for any exit from try...catch. That includes an explicit return.

function func() {

    try {
        return 1;

    } catch (err) {
        /* ... */
    } finally {
        console.log( 'finally' );
    }
}

console.log( func() ); // first works console.log from finally, and then this one

/*
try...finally

The try...finally construct, without catch clause, is also useful.
We apply it when we don’t want to handle errors here (let them fall through),
but want to be sure that processes that we started are finalized.
 */

function func() {
    // start doing something that needs completion (like measurements)
    try {
        // ...
    } finally {
        // complete that thing even if all dies
    }
}

