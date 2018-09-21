/**
 * Demo of linkList. Pulls in linkList assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'molecules/link-list/_link-list.twig';

// Import demo assets
import twig from './link-lists.twig';
import yaml from './link-lists.yml';
import markdown from './link-lists.md';

export default {
    twig,
    yaml,
    markdown,
};
