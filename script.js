function addition(x, y) {
    return x + y;
}

//subtraction
function subtraction(x, y) {
    return x - y; 
}

//multiplication
function multiplication(x, y) {
    return x * y;
}

//division
function division(x, y) {
    return x / y;
}

button.addEventListener("click", changeDisplay());

function changeDisplay() {
    var x = document.getElementsByClassName("operand").value;
    document.getElementById("display").innerHTML = x;
}
