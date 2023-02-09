var next = document.getElementById("next");
var prev = document.getElementById("prev");
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("img");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    for(slide of slides) {
        slide.classList.add( "d-none");
        slide.classList.remove( "d-block");
    }

    slides[slideIndex-1].classList.add("d-block");
    slides[slideIndex-1].classList.remove( "d-none");

    

}