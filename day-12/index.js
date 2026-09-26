// single line comment
/*
er por
apni ja ja
likhenna keno
shob comment hoye
jabe
*/

/**
 * dhaka
 * rajshahi
 * khulna
 * rangpur
 */

console.log(5)

var age = 5
var age = 6
age = 7
age = "egaro"

console.log(typeof x);
console.log(typeof false);
console.log(typeof 5.5);

// operators
/**
 * Arithmetic Operators
 * +
 * -
 * *
 * /
 * %
 * **
 */

/**
 * Assignemnt Operators
 * =
 * +=
 * -=
 * *=
 * /=
 * %=
 * **=
 */

/**
 * Comparison operators
 * ==
 * ===
 * !=
 * !==
 * <
 * >
 * <=
 * >=
 */

/**
 * Conditional operators
 * &&
 * ||
 * !
 */

let city = "Dhaka"
city = "Cumilla"
city = "Kuakata"
console.log(city);

const country = "BD"

// condition
const stdCount = 26;
if (stdCount <= 15) {
    if(stdCount <= 7) {
        console.log("Ghorrr ghorr");
    }else {
        console.log("gheu gheu");
    }
}else if (stdCount > 15 && stdCount <= 20) {
    console.log("Hukka huya");
}else {
    console.log("meaou meaou");
}

const bar = new Date().toLocaleString("default", {weekday: "long"})

switch (bar) {
    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;

    default:
        console.log("Invalid Day");
        break;
}

// ternary operator ?:
if(5 > 4) {
    console.log("Shorto puron hoyeche");
} else {
    console.log("Shorto puron hoyni");
}

const res = 5 < 4 ? "Shorto puron hoyeche":"Shorto puron hoyni"
console.log(res);


