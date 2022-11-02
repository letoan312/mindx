// const inputName = prompt("What's your username?")

// localStorage.setItem("username", "inputName");

// console.log(localStorage.getItem("username"));

// setTimeout(() => {
//     localStorage.removeItem("username")
// }, 5000);

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    },
    {
        name: 'Khóa học Expressjs tutorial',
        price: 540000
    },
    {
        name: 'Khóa học Database relationship Pro',
        price: 1200000
    }
]
// tinh tong tien dung for
// Expected results:

function getTotal() {
    let a = 0;
    for (let i = 0; i < orders.length; i++) {
        a += orders[i].price;
    }
    console.log(a);
}

getTotal(orders)

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
// dung array method de tim 
// cac mon the thao cos like > 5
// Kỳ vọng

function getMostFavoriteSport() {
    for (let i = 0; i < sports.length; i++) {
        if (sports[i].like > 5) {
            console.log(sports[i]);
        }
    }
}

console.log(getMostFavoriteSport(sports)) 

// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]