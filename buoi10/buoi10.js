function logArray(arr) {
    // logic
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let food = ["apple", "orange", "melon"];

logArray(food.sort());

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const sum = add(5, 10);
console.log(sum);

const min = sub(5, 10);
console.log(min);

const logObject = (obj) => {
    console.log("OBJ:", obj);
}

const logBool = function (boo) {
    if (boo) {
        console.log("dung");
    } else {
        console.log("sai");
    }
}

logBool(true);

function logDate() {
    const now = new Date();
    console.log(now);
}

logDate();
setTimeout(logDate, 3000);

const logDay = setInterval(() => {
   console.log(new Date()); 
}, interval);

logDay();
