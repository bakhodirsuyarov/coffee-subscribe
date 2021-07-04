var elHeaderSection = document.querySelector('.header-section')
var elHeaderButton = document.querySelector('.js-header-button')




if(elHeaderButton){
  elHeaderButton.addEventListener('click', function() {
    elHeaderSection.classList.toggle('header-section--open');
  });
}



let one = document.querySelector('.one')
let oneItem = document.querySelector('.one-item')
let two = document.querySelector('.two')
let twoItem = document.querySelector('.two-item')
let three = document.querySelector('.three')
let threeItem = document.querySelector('.three-item')
let four = document.querySelector('.four')
let fourItem = document.querySelector('.four-item')
let five = document.querySelector('.five')
let fiveItem = document.querySelector('.five-item')

one.addEventListener('click', ()=>{
  oneItem.classList.toggle('active')
})


two.addEventListener('click', ()=>{
  twoItem.classList.toggle('active')
})

three.addEventListener('click', ()=>{
  threeItem.classList.toggle('active')
})

four.addEventListener('click', ()=>{
  fourItem.classList.toggle('active')
})

five.addEventListener('click', ()=>{
  fiveItem.classList.toggle('active')
})


