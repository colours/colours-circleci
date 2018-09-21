/**
 * Demo of twoColumnGrid. Pulls in twoColumnGrid assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/two-column-grid';

// Import demo assets
import twig from './two-column-grids.twig';
import yaml from './two-column-grids.yml';
import markdown from './two-column-grids.md';

export default {
    twig,
    yaml,
    markdown,
};
