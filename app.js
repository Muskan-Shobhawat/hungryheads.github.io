// window.addEventListener("scroll", navbarf);
// function navbarf() {
//     navbar[0].style.display = "none";
//     navbar2[0].style.display = "block";
//     up = window.scrollY;
//     if (up == 0) {
//         navbar[0].style.display = "block";
//         navbar2[0].style.display = "none";
//     }
// }

let cardcontainer=document.getElementsByClassName("cardcontainer");
let menucontainer=document.getElementsByClassName("menucontainer");
let img1=document.getElementById("img1");
let navbar2=document.getElementsByClassName("navbar2");
let navbar=document.getElementsByClassName("navbar");

cardcontainer[0].addEventListener("mouseenter", fun);
function fun(){
menucontainer[0].style="background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(doodle2.jpg)";
}

cardcontainer[0].addEventListener("mouseleave", fun1);
function fun1(){
menucontainer[0].style="background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(doodle2.jpg)";
}