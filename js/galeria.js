const images = document.querySelectorAll('.img');
const containerImg = document.querySelector('.container-img');
const imgContainer = document.querySelector('.img-show');
const icono = document.querySelector('.icon');

images.forEach(image =>{

    image.addEventListener('click',()=>{
        addImage(image.getAttribute('src'))
    })
    
})
const addImage = (srcImg,)=>{
    containerImg.classList.toggle('mover')
    imgContainer.classList.toggle('show')
    imgContainer.src = srcImg;
}

icono.addEventListener('click',()=>{
    containerImg.classList.toggle('mover')
    imgContainer.classList.toggle('show')
})