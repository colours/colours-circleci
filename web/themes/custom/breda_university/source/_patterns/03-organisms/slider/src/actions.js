import Flickity from 'flickity';

export function prevNextSlideActions() {
    function changeSlideClasses(slide, method, className) {
        if (!slide) {
            return;
        }
        slide.getCellElements().forEach((cellElem) => {
            cellElem.classList[method](className);
        });
    }

    Flickity.prototype.setPrevNextCells = function createPrevNextCells() {
        this.on('select', this.setPrevNextCells);
    };

    Flickity.prototype.createPrevNextCells = function setPrevNextCells() {
        // remove classes
        changeSlideClasses(this.previousSlide, 'remove', 'is-previous');
        changeSlideClasses(this.nextSlide, 'remove', 'is-next');

        // set slides
        this.previousSlide = this.slides[this.selectedIndex - 1];
        this.nextSlide = this.slides[this.selectedIndex + 1];

        // add classes
        changeSlideClasses(this.previousSlide, 'add', 'is-previous');
        changeSlideClasses(this.nextSlide, 'add', 'is-next');
    };

    Flickity.createMethods.push('createPrevNextCells');
}

export default prevNextSlideActions;
