var but1 = document.getElementById("b2")
but1.addEventListener("click", display1);

var but2 = document.getElementById("b3")
but2.addEventListener("click", display2);

function display2() {
    var slide1 = document.getElementsByClassName("slide1")[0];
    var slide2 = document.getElementsByClassName("slide2")[0];
    slide1.style.height = "0%";
    slide2.style.height = "85%";
    but2.style.backgroundColor = "black" ;
    but2.style.color = "white" ;
    but1.style.backgroundColor = "white" ;
    but1.style.color = "black" ;

}

function display1() {
    var slide1 = document.getElementsByClassName("slide1")[0];
    var slide2 = document.getElementsByClassName("slide2")[0];
    slide1.style.height = "85%";
    slide2.style.height = "0%";
    but1.style.backgroundColor = "black" ;
    but1.style.color = "white" ;
    but2.style.backgroundColor = "white" ;
    but2.style.color = "black" ;

}