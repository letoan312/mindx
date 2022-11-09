function getRandomColor() {
    let colorValue = Math.floor(Math.random() * 16777216);
    let colorValueHex = colorValue.toString(16);
    let colorHex = "#" + colorValueHex;
    document.getElementById("color-hex").value = colorHex;
    document.getElementById("body").style.backgroundColor = colorHex;
}

function copyHex() {
    let copyText = document.getElementById("color-hex");
    copyText.select(); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}