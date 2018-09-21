/**
 * Demo of headerSlider. Pulls in headerSlider assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/header-slider';

// Import demo assets
import twig from './header-sliders.twig';
import yaml from './header-sliders.yml';
import markdown from './header-sliders.md';

export default {
    twig,
    yaml,
    markdown,
};
