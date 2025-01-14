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
        slideIndex -= 1;
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        if (slideIndex < 0) {slideIndex = slides.length - 1};
        
        slides[slideIndex].style.display = 'block';
    });
    
}