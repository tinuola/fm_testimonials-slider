
const prevBtn = document.getElementById('prev')

const nextBtn = document.getElementById('next')

const images = document.querySelectorAll('.image')

let count = 0

let currentImage = images[count]

// console.log(currentImage.nextElementSibling)

nextBtn.addEventListener('click', function(){
  currentImage.classList.remove('show')
  currentImage.classList.add('hide')
  
  count+=1

  let nextImage = currentImage.nextElementSibling
  nextImage.classList.remove('hide')
  nextImage.classList.add('show')
  currentImage = images[count]
  console.log(currentImage)
})

prevBtn.addEventListener('click', function(){

  currentImage.classList.remove('show')
  currentImage.classList.add('hide')
  
  count-=1

  let prevImage = currentImage.previousElementSibling
  prevImage.classList.remove('hide')
  prevImage.classList.add('show')
  currentImage = images[count]
  console.log(currentImage)
})
