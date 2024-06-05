// Generic function to initialize sliders
function initSlider(sliderId) {
  var slideIndex = 1;
  showSlides(slideIndex, sliderId);

  function plusSlides(n) {
    showSlides(slideIndex += n, sliderId);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n, sliderId);
  }

  function showSlides(n, sliderId) {
    var i;
    var slider = document.getElementById(sliderId);
    var slides = slider.getElementsByClassName("slides");
    var dots = slider.parentNode.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return { plusSlides, currentSlide };
}

// Initialize sliders
var slider1 = initSlider('slider1');
var slider2 = initSlider('slider2');

document.querySelector('#slider1 .prev').onclick = () => slider1.plusSlides(-1);
document.querySelector('#slider1 .next').onclick = () => slider1.plusSlides(1);
document.querySelectorAll('#slider1 .dot').forEach((dot, index) => {
  dot.onclick = () => slider1.currentSlide(index + 1);
});

document.querySelector('#slider2 .prev').onclick = () => slider2.plusSlides(-1);
document.querySelector('#slider2 .next').onclick = () => slider2.plusSlides(1);
document.querySelectorAll('#slider2 .dot').forEach((dot, index) => {
  dot.onclick = () => slider2.currentSlide(index + 1);
});

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}

function backToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}