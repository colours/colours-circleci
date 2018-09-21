/**
 * Demo of highlighteditem. Pulls in highlighteditem assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'molecules/highlighted-item';

// Import demo assets
import twig from './highlighted-items.twig';
import yaml from './highlighted-items.yml';
import markdown from './highlighted-items.md';

export default {
    twig,
    yaml,
    markdown,
};
