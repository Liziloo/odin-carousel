export { carousel };

const carousel = () => {
    let slideIndex = 0;
    const slideNodes = document.querySelectorAll('.image-container');
    const slides = [...slideNodes];

    function showSlides() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        })
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1};
        slides[slideIndex-1].style.display = 'block';
        setTimeout(showSlides, 5000);
    }
    showSlides();

    const prevButton = document.querySelector('.previous');
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        slideIndex--;
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        if (slideIndex < 0) {slideIndex = slides.length - 1};
        
        slides[slideIndex].style.display = 'block';
    });
    
    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        slideIndex++;
        slides.forEach((slide) => {
            slide.style.display = 'none';
        })
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].style.display = 'block';
    })
}