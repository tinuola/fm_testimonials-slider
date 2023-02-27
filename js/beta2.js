/* 
  Draft/simple code to test that event handlers don't fire
  if image count is less than 0 or greater than number
  of images in the slider
*/

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const images = document.querySelectorAll('.image')
let sliderLength = images.length
let count = 0


nextBtn.addEventListener('click', function(){
  if( count >= 0 && count < sliderLength-1){
    count++;
    console.log(count)
  }
})


prevBtn.addEventListener('click', function(){
  if( count <= sliderLength && count > 0){
    count--;
    console.log(count)
  }
})
