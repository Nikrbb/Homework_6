// Task #1

let a = Boolean(Number(`10`)) + 1; // 2
let b = `sub ` + Number(false); // sub 0
let c = 16  *  `      91    `; // 1456
let d = true-70; //-69
let e = Number(1 + String(1)) + 1; // 12

// Task #2

const minute = 60; // seconds
const secondsInHour = minute * 60; // minutes 

let period = Number(prompt(`Сколько часов в день ты проводишь за компухтером?`));
let counter = period * secondsInHour;

alert(`Это ${counter} секунд, приникь`);

// Task #3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);
