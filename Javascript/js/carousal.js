const track = document.querySelector('.carousel__track');
// console.log(track);
const slides = Array.from(track.children);
// console .log(slide);
const nextButton = document.querySelector('.carousel__button--left');
const prevButton = document.querySelector('.carousel__button--right');
const dotsNav = document.querySelector('.carousel__nav');

const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

const setSlidePosition = (slide,index) =>{
    slide.style.left =slideWidth * index + 'px';

}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    
}

const updateDots = (currentDot, targetDot)=>{
    currentDot.classList.remove('current-slide');
target.classList.add('current-slide');
}

const hideShowArrows =(slides,prevButton,nextButton,targetIndex) =>{
    if(targetIndex ===0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    
    }else if (targetIndex=== slides.length -1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

prevButton.addEventListener('click',e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide =currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.crrent-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
   
    moveToSlide(track, currentSlide,prevSlide);
    updateDots(currentDot,prevDot);
    hideShowArrows =(slides,prevButton,nextButton,prevIndex);

});

nextButton.addEventListener('click',e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.crrent-slide');
   const nextDot = currentDot.nextElementSibling;
   const nextIndex = slides.findIndex(slide => slide === nextSlide);
    // move to the next slide
    
    moveToSlide(track,currentSlide, nextSlide);
    updateDots(currentDot,nextDot);
    hideShowArrows =(slides,prevButton,nextButton,targetIndex);

});

// dots to worked 

dotsNav.addEventListener('click', e =>{
    //whats indictopr was clicked on?
    const targetDot = e.target.closest('button');

    
if (!targetDot) return;

const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');

const targetIndex = dots.findIndex(dot=> dot === targetDot);
const targetSlide = slides[targetIndex];

moveToSlide(track,currentSlide, targetSlide);

updateDots(currentDot,targetDot);
hideShowArrows =(slides,prevButton,nextButton,targetIndex);
    
})

