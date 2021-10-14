#!/usr/bin/node
const fetch = require('node-fetch');


function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

let url = "https://api.github.com/users/yalchin403";
loadJson(url)
    .then(user => console.log(user.id))
    .catch(err => console.log(err)); // Error: 404

// convert it into async
