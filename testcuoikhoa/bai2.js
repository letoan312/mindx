function numberOneTriangle() {
    const n = document.getElementById("num").value;
    console.log(n);
    let triangle = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
          triangle += "*";
        }
        triangle += "<br>";
    }
    document.getElementById("output").innerHTML = triangle;
}