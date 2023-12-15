
let slideIndex = 0
showSlide();
function prevImage() {
    showSlide((slideIndex -= 1));
}

function nextImage() {
    showSlide((slideIndex += 1));
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    if(slides.length > 0) {
        slides[slideIndex].style.display = 'block';
    }
}


function moveSlider() {
    nextImage();
}

const timerInterval = setInterval(moveSlider, 5000);