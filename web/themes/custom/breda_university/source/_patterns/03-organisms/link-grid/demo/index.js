/**
 * Demo of linkGrid. Pulls in linkGrid assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/link-grid';

// Import demo assets
import twig from './link-grids.twig';
import yaml from './link-grids.yml';
import markdown from './link-grids.md';

export default {
    twig,
    yaml,
    markdown,
};
