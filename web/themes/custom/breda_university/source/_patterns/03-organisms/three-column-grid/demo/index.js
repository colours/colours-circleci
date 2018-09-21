/**
 * Demo of threeColumnGrid. Pulls in threeColumnGrid assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/three-column-grid';

// Import demo assets
import twig from './three-column-grids.twig';
import yaml from './three-column-grids.yml';
import markdown from './three-column-grids.md';

export default {
    twig,
    yaml,
    markdown,
};
