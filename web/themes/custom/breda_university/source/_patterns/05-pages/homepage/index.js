/**
 * Full Page Demos
 *
 * This file is NOT imported by design-system.js, but is included as part of
 * particle/apps/pl/index.js
 */

// Ensure all assets required by demos are present.
import 'protons';
import 'templates/site-container.twig';
import 'templates/homepage';

// Demo templates.
import './homepage.twig';

export const name = 'demoPages';

export function disable() {}

export function enable() {}

export default enable;
