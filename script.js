const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollAmount = 180; 

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});