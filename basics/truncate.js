// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
//
// truncate("Hi everyone!", 20) = "Hi everyone!"

let truncate = function (str, maxLength){
    if (str.length <=20) return str;
    let newStr = str.slice(0, 21) + "...";
    return newStr;
};
str = "What I'd like to tell on this topic is:";
maxLength = 20;
console.log(truncate(str, maxLength))