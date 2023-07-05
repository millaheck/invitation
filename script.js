const sliderInner = document.querySelector('.slider-inner');
const images = Array.from(sliderInner.querySelectorAll('img'));
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function updateSlider() {
  const translateX = -currentIndex * 100;
  sliderInner.style.transform = `translateX(${translateX}%)`;
}

// Configurar intervalo para a transição automática (tempo em milissegundos)
const interval = 1000; // 3 segundos

setInterval(nextSlide, interval);
