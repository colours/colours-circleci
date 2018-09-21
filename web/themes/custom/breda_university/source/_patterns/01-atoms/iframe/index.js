/**
 * Breadcrumb
 */

import reframe from 'reframe.js';

// Custom
import 'protons';

// Scss
import './_iframe.scss';

// Module template
import './_iframe.twig';

export const name = 'iframe';

export function disable() {
}

export function enable() {
    reframe('iframe');
}

export default enable;
