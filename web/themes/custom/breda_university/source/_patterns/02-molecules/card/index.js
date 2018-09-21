/**
 * Card
 */

// Module dependencies
import 'protons';
import 'atoms/image';
import 'atoms/button';

// Module template
import './_card.twig';
import './_card-column.twig';
import './_card-layout.twig';
import './_card-blue.twig';
import './_card-orange.twig';
import './_card-grey.twig';
import './_card-white.twig';
import './_card-quote.twig';
import './_card-simple.twig';
import './_card-link-list.twig';

// Module styles
import './_card.scss';

export const name = 'card';

export function disable() {
}

export function enable() {
}

export default enable;
