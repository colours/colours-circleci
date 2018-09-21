/**
 * Nav
 */

// Custom
import 'protons';

// Module template
import './_nav.twig';
import './_nav-item.twig';
import './_nav-utility.twig';
import './_nav-footer.twig';

// Import custom sass, includes Bootstrap sass
import './scss/_nav.scss';
import './scss/_nav-utility.scss';
import './scss/_nav-footer.scss';

export const name = 'nav';

export function disable() {
}

export function enable() {
}

export default enable;
