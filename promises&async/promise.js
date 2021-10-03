#!/usr/bin/node
const fs = require('fs');


new Promise(
    (resolve, reject) => {
        fs.readFile('../package.json', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    })
    .then(data => {
        console.log(data.toString());
    })

    .catch(err => {
        console.log(err);
    })

function delay(ms) {
    return new Promise(
        (resolve, reject) =>  {
            setTimeout(resolve, ms);
        }
    )
}

delay(5000)
    .then(
        () => console.log("Will run after 5 seconds...")
    );
