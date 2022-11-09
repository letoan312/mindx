function displayNumber() {
    const a = document.getElementById("num_a").value;
    const b = document.getElementById("num_b").value;
    console.log(a);
    console.log(b);
    let number = "";
    let i;
    for (i = 0; i <= b; i++) {
        let num = i * i;
        if (a <= num) {
            if (num <= b) {
                number += num + "<br>";
            }
        }
    }
    document.getElementById("output").innerHTML = number;
}

// test code for
// let a = 8;
// let b = 45;
// let number = "";
//     let i;
//     for (i = 0; i <= b; i++) {
//         let num = i * i;
//         if (a <= num) {
//             if (num <= b) {
//                 number += num + "<br>";
//             }
//         }
//     }
// console.log(number);
