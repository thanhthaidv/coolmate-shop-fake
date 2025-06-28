    const sliderItem = document.querySelectorAll('.slider-item');
    for (let index = 0;index <sliderItem.length;index++){

        sliderItem[index].style.left = index *100 + "%";

    }

    const sliderItems = document.querySelector('.slider-items');
    const arrowRight = document.querySelector('.fa-arrow-right');
    const arrowLeft = document.querySelector('.fa-arrow-left');
    let i =0 
    if(arrowRight !=null && arrowLeft != null){
        arrowRight.addEventListener('click',()=> {
            i++
            if(i < sliderItem.length){
                sliderItems.style.left = -i * 100 + "%";
            } else{
                i=0
                sliderItems.style.left = -i * 100 + "%";
            }
        });

        arrowLeft.addEventListener('click',()=> {
            if(i <= 0){
                return false
            } else{
                i--
                sliderItems.style.left = -i * 100 + "%";
            }
        });
    }

    function sliderMove(i){
        sliderItems.style.left = -i * 100 + "%";
    }

// function autoSlider() {
//     if(i < sliderItem.length-1  ){
//         i++
//         sliderItems.style.left = -i * 100 + "%";
//     } else{
//         i=0
//         sliderItems.style.left = -i * 100 + "%";
//     }

// }
// setInterval(autoSlider, 5000)

//menubar responsive
const menuBar =document.querySelector('.header-bar-icon')
const headerNav = document.querySelector('.header-nav');

menuBar.addEventListener('click',()=>{
    headerNav.classList.toggle('active')
})


//sticky header
window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        document.querySelector('#header').classList.add('active');
    }
    else{
        document.querySelector('#header').classList.remove('active');
    }
});


//click prodct detail
const imageSmall =document.querySelectorAll('.product-images-items img')
const imageMain = document.querySelector('.main-image ');
for(let index = 0;index < imageSmall.length;index++){
    imageSmall[index].addEventListener('click',()=>{
        imageMain.src = imageSmall[index].src;

        for(let i = 0;i < imageSmall.length;i++){
            imageSmall[i].classList.remove('active');
        }
        
        imageSmall[index].classList.add('active');
    })
}


//quantity product
const quanPlus = document.querySelector('.fa-plus');
const quanMinus = document.querySelector('.fa-minus');
const quantityInput = document.querySelector('.quantity-input');
let qty=1
quanPlus.addEventListener('click',()=>{
    quantityInput.value=qty++;
})

quanMinus.addEventListener('click',()=>{
    if(qty < 1){
        return false
    } else{
        quantityInput.value=qty--;
    }
})  

