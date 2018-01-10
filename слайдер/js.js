var carousels = document.querySelectorAll('#carousels .carousel');
  var currentCarousel = 0;
  var carouselInterval = setInterval(nextCarousel,3000); /* Интервал между картинками */

  function nextCarousel(){
	carousels[currentCarousel].className = 'carousel';
	currentCarousel = (currentCarousel+1)%carousels.length;
	carousels[currentCarousel].className = 'carousel demonstration';
	console.log(currentCarousel-1);
	
} 

// document.getElementById('right').onclick = rightCarousel;

// function rightCarousel(){
// 	carousels[currentCarousel].className = 'carousel';
// 	currentCarousel = (currentCarousel+1)%carousels.length;
// 	carousels[currentCarousel].className = 'carousel demonstration';
// }

// document.getElementById('left').onclick = leftCarousel;

// function leftCarousel(){
// 	carousels[currentCarousel].className = 'carousel';
// 	currentCarousel = (currentCarousel+1)+carousels.length;
// 	carousels[currentCarousel].className = 'carousel demonstration';
// }