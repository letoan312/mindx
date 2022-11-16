let aclicks;
let bclicks;
let cclicks;

function clickOne() {
    aclicks += 1;
    document.getElementById("like-one").innerHTML = aclicks;
}

function clickTwo() {
    bclicks += 1;
    document.getElementById("like-two").innerHTML = bclicks;
}

function clickThree() {
    cclicks += 1;
    document.getElementById("like-three").innerHTML = cclicks;
}