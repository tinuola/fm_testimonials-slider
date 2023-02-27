const prevBtn = document.getElementById('prev')

const nextBtn = document.getElementById('next')

const images = document.querySelectorAll('.image')

let sliderLength = images.length

let count = 0

let currentImage = null 

let nextImage = null

let previousImage = null


nextBtn.addEventListener('click', function(){
// if( count >= 0 && count < sliderLength-1){
//  count++;
//  console.log(count)
// }

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
    this.classList.add('disable')
  }
})


prevBtn.addEventListener('click', function(){
  // if( count <= sliderLength && count > 0){
  //   count--;
  //   console.log(count)
  // }

  if( count <= sliderLength && count > 0){
    nextBtn.classList.remove('disable')
    currentImage.classList.add('hide')
    prevImage = currentImage.previousElementSibling
    prevImage.classList.remove('hide')
    currentImage = prevImage
    count--;
  }

  if(count === 0){
    this.classList.add('disable')
  }
})
