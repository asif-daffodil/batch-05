function sumDay (msg1 = "Hello", msg2 = "World") {
    return `the message is :  ${msg1} ${msg2}`
}

console.log(sumDay("Hello", "Abba"));
console.log(sumDay("Hello", "Amma"));
console.log(sumDay());
console.log(sumDay("Hi"));

function calculator (num1, num2, operator) {
    if(!+num1 || !+num2) {
        return "Numbers are not valid"
    }

    switch (operator) {
        case "+":
            return +num1 + +num2;
        case "-":
            return +num1 - +num2;
        case "*":
            return +num1 * +num2;
        case "/":
            return +num1 / +num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculator("5", 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "!"));
console.log(calculator("Kakku", 5, "+"));


// function obuj (msg) {
//     return msg
// }

// const obuj = function() {
//     return "shishu"
// }

// const obuj = (msg) => {
//     return msg
// }

// const obuj = msg => {
//     return msg
// }

const obuj = msg => msg
