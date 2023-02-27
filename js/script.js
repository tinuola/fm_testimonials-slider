const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const images = document.querySelectorAll('.testimonial')

let sliderLength = images.length
let count = 0

let currentImage; 
let nextImage;
let previousImage;


/* 
  Target current image and remove visibility
  Cue next image and add visibility
  Set next image to be current image
  Desaturate nextBtn at end of the slider
*/
const moveForward = () => {
  if( count >= 0 && count < sliderLength-1){
    prevBtn.classList.remove('disable')

    currentImage = images[count]
    currentImage.classList.add('hide')
    nextImage = currentImage.nextElementSibling
    nextImage.classList.remove('hide')
    currentImage = nextImage
    
    count++
  }

  if(count === sliderLength-1){
    nextBtn.classList.add('disable')
  }
}


/* 
  Remove visibility from current image
  Cue previous image and add visibility
  Set previous image to be current image
  Desaturate prevBtn at start of the slider
*/
const moveBackward = () => {
  if( count <= sliderLength && count > 0){
    nextBtn.classList.remove('disable')

    currentImage.classList.add('hide')
    prevImage = currentImage.previousElementSibling
    prevImage.classList.remove('hide')
    currentImage = prevImage

    count--;
  }

  if(count === 0){
    prevBtn.classList.add('disable')
  }
}


nextBtn.addEventListener('click',moveForward)
prevBtn.addEventListener('click', moveBackward)