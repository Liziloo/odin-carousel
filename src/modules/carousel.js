export { carousel };

const carousel = () => {
    let slideIndex = 1;
    const slideNodes = document.querySelectorAll('.image-container');
    const slides = [...slideNodes];

    const placekeeperDiv = document.querySelector('.placekeeper-div');
    slides.forEach((_, index, array) => {
        const placekeeper = document.createElement('div');
        placekeeper.classList.add('placekeeper');
        placekeeper.id = `placekeeper-${index + 1}`;
        placekeeperDiv.appendChild(placekeeper);
        placekeeper.addEventListener('click', () => {
            array.forEach((slide) => {
                slide.style.display = 'none';
            })
            slideIndex = index;
            array[index].style.display = 'block';
        })
    })

    const placekeepers = document.querySelectorAll('.placekeeper');

    function showSlides() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        })
        placekeepers.forEach((el) => {
            el.style.backgroundColor = 'white';
        })
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1};
        const currentPlacekeeper = document.querySelector(`#placekeeper-${slideIndex}`);
        currentPlacekeeper.style.backgroundColor = 'gray';
        slides[slideIndex-1].style.display = 'block';
        setTimeout(showSlides, 5000);
    }
    showSlides();

    const prevButton = document.querySelector('.previous');
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        slideIndex--;
        console.log(slideIndex);
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        placekeepers.forEach((el) => {
            el.style.backgroundColor = 'white';
        })
        if (slideIndex < 1) {slideIndex = slides.length};
        const currentPlacekeeper = document.querySelector(`#placekeeper-${slideIndex}`);
        currentPlacekeeper.style.backgroundColor = 'gray';
        
        slides[slideIndex - 1].style.display = 'block';
    });
    
    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        slideIndex++;
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        placekeepers.forEach((el) => {
            el.style.backgroundColor = 'white';
        });
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        const currentPlacekeeper = document.querySelector(`#placekeeper-${slideIndex}`);
        currentPlacekeeper.style.backgroundColor = 'gray';
        slides[slideIndex - 1].style.display = 'block';
    })
}