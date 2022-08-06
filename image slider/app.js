
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex 1 1].style.display = "block";
//     dots[slideIndex 1 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }



// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if(n > slides.length) {
//     slideIndex = 1
//   }
//   if(n < 1) {
//     slideIndex = slides.length
//   }
//   for(i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for(i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex 1 1].style.display = "block";
//   dots[slideIndex 1 1].className += " active";
// }







var slide = document.getElementById("slider")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

function click1() {
    slide.style.transform = "translateX(-0px)";
    btn1.classList.add("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
}
function click2() {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove("active")
    btn2.classList.add("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
}
function click3() {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove("active")
    btn2.classList.remove("active")
    btn3.classList.add("active")
    btn4.classList.remove("active")
}
function click4() {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.add("active")
}