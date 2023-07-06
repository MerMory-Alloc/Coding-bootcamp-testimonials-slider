  var prevBtn = document.getElementsByClassName("prev_btn");
  var nxtBtn = document.getElementsByClassName("nxt_btn");

  for(let i=0;i<prevBtn.length;i++){
    prevBtn[i].addEventListener("click", prevSlide);
    nxtBtn[i].addEventListener("click", nextSlide);
  }



    var slideIndex = 1;
    showSlide(slideIndex);

    function nextSlide() {
      showSlide(slideIndex += 1);
    }

    function prevSlide() {
      showSlide(slideIndex -= 1);
    }

    function showSlide(n) {
      var slides = document.getElementsByClassName("testimonial");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }


    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    });