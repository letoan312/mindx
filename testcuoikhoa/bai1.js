function displayNumber() {
    const a = document.getElementById("num_a").value;
    const b = document.getElementById("num_b").value;
    console.log(a);
    console.log(b);
    let sum = 0;
    for (n = a; n <= b; n++) {
        let flag = true;
        if (n < 2) {
            flag = false;
        } else {
            for (let i = 2; i < n-1; i++)
            {
                if (n % i == 0){
                    flag = false;
                    break;
                }
            }
        }
        if (flag == true){
            sum += n;
        }
    }
    document.getElementById("output").innerHTML = sum;
}

// function kiem_tra_snt(n) {
//     if (n < 2){
//         flag = false;
//     } else {
//         for (var i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag == true){
//         sum += n;
//     }
// }