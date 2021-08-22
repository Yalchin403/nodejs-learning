// const {readFile} = require('fs')

// console.log("Started the first task")

// readFile("./input.js", "utf8", (err, result) => {
//     if (!err){
//         console.log("Call back done!")
//         console.log(`Call back result ${result}`)
//         return result
//     }  // async

// }
// )

// console.log("Third task done!")

const {readFile} = require('fs')

readFile(
    "./random_text.txt", "utf8", (err, data) => {

            console.log(`${data}`)

    }
)

console.log("we are still waiting for data to be printed....")