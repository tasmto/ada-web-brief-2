
const addSliderFunctionality = () => {
    const sliders = document.querySelectorAll('.event-slider-container--outer');
    if (!sliders) {return;}
    sliders.forEach(slideContainer => {
        const slides = slideContainer.querySelectorAll('.event-slide');
        slides.forEach(slide => {
            slide.setAttribute('onmouseover', 'changeActiveSlide (this)');
            slide.setAttribute('onclick', 'changeActiveSlide (this)');
            slide.setAttribute('onfocus', 'changeActiveSlide (this)');
        })

    });

}

(function() {
    addSliderFunctionality();
}());

const  removeCurrentActiveSlide = sliderParent => {
    const openSlider = sliderParent.querySelector('.event-slide-active');
    openSlider.classList.remove('event-slide-active');

    const currentlyExpanded = sliderParent.querySelectorAll('.expand-content.open');
    currentlyExpanded.forEach(expandBox => {
        expandBox.classList.remove('open');
    })
}

const  addNewActiveSlide = slide => {
    slide.classList.add('event-slide-active');

    const expandedBoxes = slide.querySelectorAll('.expand-content');
    expandedBoxes.forEach(expandBox => {
        expandBox.classList.add('open');
    })
}

const changeActiveSlide = slide => {
    const sliderParent = slide.parentElement;
    removeCurrentActiveSlide(sliderParent);
    addNewActiveSlide(slide);
}