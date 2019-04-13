// Your code goes here
document.getElementsByTagName("img")[0].setAttribute("class", "header-image")
const headerImage = document.querySelector('.header-image')
headerImage.addEventListener('mouseover', function(event){
    event.target.style.opacity = "0.5"
})

headerImage.addEventListener('mouseout', function(event){
    event.target.style.opacity = "1"
})


const logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('dblclick', function(event) {
    event.target.style.fontWeight = "bold"
})

window.addEventListener('load', function(event) {
    alert('Welcome to FUN BUS!')
})


const headerPar = document.querySelector('header p')
headerPar.addEventListener('wheel', function(event){
    event.target.style.fontSize = "5rem"
}) /*blocker?*/

const midPic1 = document.querySelector('.img-content img')
midPic1.addEventListener('drag', function(event) {
    event.target.style.opacity = '0.5'
})

midPic1.addEventListener('dragend', function(event){
    event.stopPropagation()
    const middlePicture1 = event.target.src 
    document.body.style.background = `url(${middlePicture1})`
    document.body.style.height = "100%"
    document.body.style.backgroundSize = "cover"
})

const midPic2 = document.querySelector('.inverse-content img')
midPic2.addEventListener('drag', function(event) {
    event.target.style.opacity = '0.5'
})
midPic2.addEventListener('dragend', function(event){
    event.stopPropagation()
    const middlePicture2 = event.target.src 
    document.body.style.background = `url(${middlePicture2})`
    document.body.style.height = "100%"
    document.body.style.backgroundSize = "cover"
})

const contentSection = document.querySelector('.content-section')
contentSection.addEventListener('click', function(event){
    event.target.style.fontWeight = "bold"
})
const contentSectionText = document.querySelector('.content-section p') 
contentSectionText.addEventListener('click', function(event){
    event.stopPropagation()
    event.target.style.color = "red"
})

const inputElement = document.createElement('input')
const contentPick = document.querySelector('.content-pick')
const signMeUpBtn = document.querySelector('.destination .btn')
signMeUpBtn.addEventListener('click', function(event){
    contentPick.appendChild(inputElement)
})

inputElement.addEventListener('keydown', function(event){
    alert('key pressed')
   
})
inputElement.addEventListener('focus', function(event) {
    event.target.style.backgroundColor = 'orange'
})
inputElement.addEventListener('blur', function(event) {
    event.target.style.backgroundColor = 'white'
})
contentPick.addEventListener('contextmenu', function(event){
    event.target.style.background = 'orange'
})

