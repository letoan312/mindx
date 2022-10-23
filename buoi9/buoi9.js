// Array, Object, Function

// Array: Cac mon an trong 1 menu / Cac phan trong 1 muc luc 

let egg = "egg";
let beef = "beef";
// let ...

let drinks = ["milk", "beer", "wine"]

console.table(drinks)

let food = [];

food[0] = "rice";
food[1] = "beef";
food[2] = "pork";
food[3] = "egg";

console.log(food);

// ha`m Read, Update, Delete
// function cua Array

food.push("orange");
console.log(food);

let nums = [199, 256, 432, 998, 525, 746];

// console.log(nums.sort(Number));
console.log(food.sort().reverse());

console.log(food.concat(drinks));

console.log(food.splice(1, 1));

console.log(food.includes("beef"));

console.log(food.join("/"));

let result = "";
for (let i = 0; i < food.length; i++) {
    result += food[i];
    if (i === food.length -1) {
        result += "*";
    }
}
console.log(food.join("*"));
console.log(result);

console.log(typeof 1);
console.log(typeof []);

const newArr = new Array(10);

console.log(newArr);
console.log(typeof newArr);

// Object

/* 
let car = ["wheel", "mirror", "seat"]
cac du lieu khong cung level voi nhau
*/

let car = {
    brand: "Toyota",
    maxspeed: "200km/h",
    year: "2022",
};

console.log(car);

let person = {
    name: "LVAT",
    age: "18",
    marry: false,
    wife: undefined,
    job: ["student", "designer"],
    pc: {
        name: "Asus",
        year: "2022",
        ram: 16,
        monitor: {
            hz: 144,
            rgb: "aurasync",
        }
    }
}

console.log(person);

person.pc.rom = "512GB";
console.log(person.pc);

let inputUser = "price";
person.pc[inputUser] = "27tr";
console.log(person.pc);

delete person.wife;
console.log(person);

// CRUD: Create, Read, Update, Delete

// function cua Object

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));