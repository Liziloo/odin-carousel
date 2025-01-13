export { Carousel };

class Carousel {
    constructor(images) {
        this.images = images,
        this.currentImage = this.images[0],
        this.window = document.querySelector('.carousel-window');
        this.carouselImage = document.createElement('img');
    }

    initiate() {
        this.carouselImage.src = this.currentImage;
        this.carouselImage.classList.add('carousel-image');
        this.window.appendChild(this.carouselImage);
    }

    next() {
        const currentIndex = this.images.indexOf(this.currentImage);
        if (currentIndex < this.images.length()) {
            this.currentImage = this.images[currentIndex + 1];
        } else {
            this.currentImage = this.images[0];
        }
        this.carouselImage.src = this.currentImage;
    }   
}