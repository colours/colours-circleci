/**
 * Demo of textColumn. Pulls in textColumn assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'molecules/text-column';

// Import demo assets
import twig from './text-columns.twig';
import yaml from './text-columns.yml';
import markdown from './text-columns.md';

export default {
    twig,
    yaml,
    markdown,
};
