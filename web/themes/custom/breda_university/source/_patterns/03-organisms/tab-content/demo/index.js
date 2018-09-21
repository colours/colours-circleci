/**
 * Demo of tabContent. Pulls in tabContent assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/tab-content';

// Import demo assets
import twig from './tab-contents.twig';
import yaml from './tab-contents.yml';
import markdown from './tab-contents.md';

export default {
    twig,
    yaml,
    markdown,
};
