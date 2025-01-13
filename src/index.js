import { Carousel } from './modules/carousel';
import './styles/comeau-reset.css';
import './styles/styles.css';
import creoleCroc from './assets/images/creole_croc_by_yashobi.jpg';
import theRedhead from './assets/images/the_redhead__by_yashobi.jpg';
import theStare from './assets/images/the_stare_by_yashobi.jpg';
import youngGirl from './assets/images/young_girl_by_yashobi.jpg';

(function() {
    const carousel = new Carousel([
        creoleCroc,
        theRedhead,
        theStare,
        youngGirl
    ]);
    carousel.initiate();

    const prevButton = document.querySelector('.previous');
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        carousel.next();
    })
}) ();