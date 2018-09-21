/**
 * Demo of picture. Pulls in picture assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/picture';

// Import demo assets
import twig from './pictures.twig';
import yaml from './pictures.yml';
import markdown from './pictures.md';

export default {
    twig,
    yaml,
    markdown,
};
