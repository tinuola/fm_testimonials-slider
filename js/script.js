
const prevBtn = document.getElementById('prev')

const nextBtn = document.getElementById('next')

const images = document.querySelectorAll('.image')

let sliderLength = images.length
// console.log(sliderLength)

let count = 0

let currentImage = null // images[count]

let nextImage = null

let previousImage = null





nextBtn.addEventListener('click', function(){
//   if( count >= 0 && count < sliderLength-1){
// count++;
// console.log(count)}

if( count >= 0 && count < sliderLength-1){
  // count++
  prevBtn.classList.remove('disable')
  // console.log(count)
  currentImage = images[count]
  currentImage.classList.remove('show')
  currentImage.classList.add('hide')
  // console.log(currentImage)
  nextImage = currentImage.nextElementSibling
  nextImage.classList.remove('hide')
  currentImage = nextImage
  // console.log(nextImage)
  count++
  // console.log(count)
}

if(count === sliderLength-1){
  this.classList.add('disable')
  // console.log(this)
}


  // if(count >= 0){
  //   prevBtn.classList.remove('disable')
  // }
  
  // if(count <= sliderLength){
  // console.log(count)
  // currentImage = images[count]
  // console.log(currentImage)

  // currentImage.classList.remove('show')
  
  // currentImage.classList.add('hide')
  
  //   nextImage = currentImage.nextElementSibling
  
  // nextImage.classList.remove('hide')
  
  // nextImage.classList.add('show')

  // count+=1
  // console.log(count)
  // currentImage = images[count]
  // console.log(currentImage)

  // // nextImage = currentImage.nextElementSibling
  
  // // nextImage.classList.remove('hide')
  
  // // nextImage.classList.add('show')
  
  // // currentImage = images[count]
  // }

  // if(count === sliderLength-1){
  //   this.classList.add('disable')
  // }
})



prevBtn.addEventListener('click', function(){
  // if( count <= sliderLength && count > 0){
  //   count--;
  //   console.log(count)}
  // count-=1

  if( count <= sliderLength && count > 0){
    nextBtn.classList.remove('disable')
    // nextImage.classList.add('hide')
    console.log(count)
    console.log(currentImage)
    currentImage.classList.add('hide')
    prevImage = currentImage.previousElementSibling
    prevImage.classList.remove('hide')
    currentImage = prevImage
    // console.log(prevImage)
    // currentImage = previousImage
    // currentImage.classList.remove('hide')

    count--;

    // console.log(currentImage)
    // previousImage = currentImage
    // console.log(previousImage)
    // count--;
    // console.log(count)
    // currentImage = images[count]
    // console.log(currentImage)
    // currentImage.classList.remove('hide')
    // console.log(currentImage)
    // prevImage = currentImage.previousElementSibling
    // currentImage = prevImage
    // console.log(previousImage)
    
    // currentImage.classList.add('hide')
    // console.log(currentImage)
    // prevImage = currentImage.previousElementSibling
    // console.log(previousImage)
    // console.log(count)



    // prevImage = currentImage.previousElementSibling
    // prevImage.classList.remove('hide')

    // count--;
    // console.log(count)
  }

  if(count === 0){
    this.classList.add('disable')
  }


  // if(count){
  //   nextBtn.classList.remove('disable')
  // }

  // if(count >= 0 && count < sliderLength){
  //   currentImage.classList.remove('show')
  //   currentImage.classList.add('hide')
  //   prevImage = currentImage.previousElementSibling
  //   prevImage.classList.remove('hide')
  //   prevImage.classList.add('show')
  //   currentImage = images[count]
  // }

  // if(count === 0){
  //   this.classList.add('disable')
  //   return null;
  // }
  // console.log(count)
})

// }