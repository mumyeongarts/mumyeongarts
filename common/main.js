document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");

  // 클론 슬라이드 추가 (무한 루프용)
  const firstClone = slide[0].cloneNode(true);
  slides.appendChild(firstClone);

  let currentIndex = 0;
  const totalSlides = slide.length;

  // 자동 슬라이드
  let slideInterval = setInterval(moveSlide, 5000);

  function moveSlide() {
    currentIndex++;
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex === totalSlides) {
      setTimeout(() => {
        slides.style.transition = "none";
        slides.style.transform = "translateX(0)";
        currentIndex = 0;
      }, 500);
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      slides.style.transition = "none";
      slides.style.transform = `translateX(-${totalSlides * 100}%)`;
      currentIndex = totalSlides - 1;
      setTimeout(() => {
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 20);
    } else {
      currentIndex--;
      slides.style.transition = "transform 0.5s ease-in-out";
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  document.querySelector(".next").addEventListener("click", () => {
    moveSlide();
    resetInterval();
  });
  document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  // 클릭 후 자동 슬라이드 초기화
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(moveSlide, 3000);
  }
});