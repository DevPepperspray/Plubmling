

//$(where the eevent is happening).theevent(the function holdong what you want to happen)

$("#nav").mouseenter(animationOne);
function animationOne(){
    $("#nav").css({"height":"54px"});
    $("#logo").css({"width":"76.88px","height":"48.05px","marginLeft":"190px"});
}

$("#nav").mouseleave(normal);
function normal(){
    $("#nav").css({"height":"168px"});
    $("#logo").css({"width":"200px","height":"125px","marginLeft":"310px"});
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
