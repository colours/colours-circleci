/**
 * Button
 */

import 'web-animations-js';
import 'bootstrap/js/src/button';

// Custom
import 'protons';

// Assets
import '../icon/svg/long-arrow.svg';

// Module template
import './_button.twig';
import './_button-outline.twig';
import './_button-dropdown.twig';
import './_button-dropdown-split.twig';

// Import custom sass, includes Bootstrap sass
import './_button.scss';

export const name = 'button';

export function disable() {
}

export function enable() {
    const animationTiming = {
        fill: 'forwards',
        duration: 300,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
    const touchSupport = ('ontouchstart' in document.documentElement === true);
    const svgns = 'http://www.w3.org/2000/svg';

    if ( typeof NodeList.prototype.forEach !== "function" ) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    document.querySelectorAll('.btn, input[type="submit"], .tab-link, .ckeditor-accordion-toggler').forEach((inkDropElement) => {
        function addRipple(event) {
            const target = event.target || event.srcElement;
            const x = touchSupport ? event.changedTouches[0].pageX : event.pageX;
            const y = touchSupport ? event.changedTouches[0].pageY : event.pageY;
            const rect = target.getBoundingClientRect();
            const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const bodyScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            const xPos = parseInt(x - rect.left - bodyScrollLeft, 10);
            const yPos = parseInt(y - rect.top - bodyScrollTop, 10);

            let svgElem = target.querySelector("svg");
            const circle = document.createElementNS(svgns,'circle');
            const animation = [
                {
                    transform: 'scale(0)',
                    transformOrigin: `${xPos  }px ${  yPos  }px`,
                    opacity: 1,
                }, {
                    transform: 'scale(2)',
                    transformOrigin: `${xPos  }px ${  yPos  }px`,
                    opacity: 0,
                },
            ];
            const cricleAnimation = circle.animate(
                animation,
                animationTiming
            );

            svgElem = document.createElementNS(svgns, "svg");

            circle.setAttributeNS(null, 'cx', xPos);
            circle.setAttributeNS(null, 'cy', yPos);
            circle.setAttributeNS(null, 'r', '50');
            circle.style.transformOrigin = `${xPos  } ${  yPos}`;

            svgElem.appendChild(circle);
            target.appendChild(svgElem);

            cricleAnimation.onfinish = function removeSvgElement() {
                svgElem.parentNode.removeChild(svgElem);
            };
        }

        if (touchSupport) {
            inkDropElement.addEventListener('touchend', addRipple, false);
        } else {
            inkDropElement.addEventListener('click', addRipple, false);
        }

    });
}

export default enable;
