/**
 * Demo of slider. Pulls in slider assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/slider';

// Import demo assets
import twig from './sliders.twig';
import yaml from './sliders.yml';
import markdown from './sliders.md';

export default {
    twig,
    yaml,
    markdown,
};
