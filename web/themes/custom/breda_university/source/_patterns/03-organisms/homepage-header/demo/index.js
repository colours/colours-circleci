/**
 * Demo of fourColumnHeader. Pulls in fourColumnHeader assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/homepage-header';

// Import demo assets
import twig from './homepage-headers.twig';
import yaml from './homepage-headers.yml';
import markdown from './homepage-headers.md';

export default {
    twig,
    yaml,
    markdown,
};
