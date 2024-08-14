
 const carouselInner = document.querySelector('.carousel-inner')

 const images = document.querySelectorAll('.carousel-inner img')

 const prevButton = document.querySelector('.carousel-control.prev')

 const nextButton = document.querySelector('.carousel-control.next')

 let currentIndex = 0;

 function showImage(index) {
  const offset = -index * 100;
  carouselInner.style.transform = `translateX(${offset}%)`

 }

 prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);

 })

 nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);

 });


 setInterval(() => {
  nextButton.click();

  }, 3000);


  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var fadeInPosition = 300; 

    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        if (scrollPosition >= fadeInPosition) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
