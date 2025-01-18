// Slideshow for the main images at home page

// Selecting the elements from DOM
var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");
var images = document.getElementsByClassName("imgBox");

// The image to show at any moment
var current = 0;

images[current].style.opacity = 1;
// Loop to apply left to the images in sequence
for (var i = 0; i < images.length; i++) {
  images[i].style.left = `${i * 100}%`;
}

// When there is an increment for current, the translate property would make the images move
function slideImage() {
  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = "0";
    images[i].style.transform = `translateX(-${current * 100}%)`;
  }
  images[current].style.opacity = "1";
}

//To move the slider to the right
function loadNext() {
  if (current < 5) {
    current++;
  } else {
    current = 0;
  }
  slideImage();
}

//To move the slider to the left
function loadPrev() {
  if (current > 0) {
    current--;
  } else {
    current = 5;
  }
  slideImage();
}
rightArrow.addEventListener("click", loadNext);
leftArrow.addEventListener("click", loadPrev);

// Animated slider. The images would move by themselves if no button is clicked
setInterval(loadNext, 5000);
