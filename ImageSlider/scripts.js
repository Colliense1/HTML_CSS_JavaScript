let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const radioButtons = document.querySelectorAll('.radio_buttons input');

// Function to show the currentSlide
function showSlide(index) {
    currentSlide = index;
    const offset = -currentSlide * 100; // Move the slider left
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    // radiobutton selection for update
    radioButtons.forEach((radio, i) => {
        radio.checked = i === currentSlide;
    });

    // radiobutton active/inactive class for slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('inactive', i !== currentSlide);
    });

}

// function change slide when radioButton clicked

radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        showSlide(index)
    });
});

// initialize the first slide
showSlide(currentSlide);
