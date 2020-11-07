let items = $('#slider').find('.item');
let activeSlide = 0;

const handlePrev = () => {
    clearInterval();
    if ( activeSlide > 0 ) {
        activeSlide = activeSlide -1;
        items.stop().fadeOut();
        items.eq(activeSlide).stop().fadeIn();
    }

    return false;
};

const handleNext = () => {
    clearInterval();
    if ( activeSlide < (items.length) -1 ) {
        activeSlide = activeSlide + 1;
        items.stop().fadeOut();
        items.eq(activeSlide).stop().fadeIn();
    }

    return false;
};

const autoSlide = () => {

    if ( activeSlide < items.length ) {
        activeSlide = activeSlide + 1;
    }

    if ( activeSlide === items.length ) {
        activeSlide = 0;
    }

    items.stop().fadeOut();
    items.eq(activeSlide).stop().fadeIn();

};

$(document).ready(function(){
    setInterval(()=>{
        autoSlide();
    }, 5000); 
});