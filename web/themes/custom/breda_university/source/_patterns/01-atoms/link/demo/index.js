/**
 * Demo of link. Pulls in link assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/link';

// Import demo assets
import twig from './links.twig';
import yaml from './links.yml';
import markdown from './links.md';

export default {
    twig,
    yaml,
    markdown,
};
