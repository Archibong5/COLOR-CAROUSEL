const slider = document.querySelector('.items');

let isDown = false; //stop the operation if there is no mouseedown
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
})


slider.addEventListener('mouseup', (e) => {
  isDown = false;
  slider.classList.remove("active");
})


slider.addEventListener('mouseleave', (e) => {
  isDown = false;
  slider.classList.remove("active");
})

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return // stop the operation if there is no mouseedown
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 5;
  slider.scrollLeft = scrollLeft - walk;
})
