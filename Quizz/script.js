var count =  (
    function () {
        var counter = 0;
        return function () {return counter +=1;}
    }
)();

function displaycount() {
    document.getElementById("carrier").innerHTML = count();
}

function redColor() {
    document.getElementById("wrong").style.backgroundColor = "red";
}

function redColor1() {
    document.getElementById("wrong1").style.backgroundColor = "red";
}

function redColor2() {
    document.getElementById("wrong2").style.backgroundColor = "red";
}

function greenColor() {
    document.getElementById("right").style.backgroundColor = "green";
}

