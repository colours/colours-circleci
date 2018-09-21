/**
 * slider
 */

import Flickity from 'flickity';

// Module dependencies
import 'protons';

// Module styles
import './_slider.scss';

// Module template
import './_slider.twig';
import './_slide-collection.twig';
import './_slide.twig';

import sliderImprovements from './src';

export const name = 'slider';

export function disable() {}

export function enable() {
    window.addEventListener('load', () => {
        const sliders = document.querySelectorAll('.slider');
        const draggableEnabled = !document.body.classList.contains('adminimal-admin-toolbar');

        for (let i = 0; i < sliders.length; i += 1) {
            /* eslint-disable no-new */
            const flkty = new Flickity(sliders[i], {
                autoPlay: 7000,
                imagesLoaded: true,
                cellAlign: 'left',
                prevNextButtons: false,
                contain: false,
                draggable: draggableEnabled,
            });

            sliderImprovements(flkty);
        }
    });
}

export default enable;
