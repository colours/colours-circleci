/**
 * Demo of text. Pulls in text assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/text';

// Import demo assets
import twig from './texts.twig';
import yaml from './texts.yml';
import markdown from './texts.md';

export default {
    twig,
    yaml,
    markdown,
};
