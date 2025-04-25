function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    // Passa pelo array de imagens mudando o display para esconder os slides
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; // Exibe o slide atual
  setTimeout(showSlides, 3000);
}
