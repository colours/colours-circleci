/**
 * header
 */

import  'intersection-observer';

// Module dependencies
import 'protons';

// Module styles
import './_header.scss';

// Assets
import './search.svg';

// Module template
import './_header.twig';

export const name = 'header';

export function disable() {
}

export function enable() {
    const header = document.querySelector('.header');
    if (header) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                header.classList.remove('header--fixed');
            } else {
                header.classList.add('header--fixed');
            }
        });

        observer.observe(header);
    }
}

export default enable;
