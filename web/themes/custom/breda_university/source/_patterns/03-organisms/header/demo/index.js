/**
 * Demo of header. Pulls in header assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of
 * apps/pl/index.js
 */

// Import component assets
import 'organisms/header';

// Import demo assets
import twig from './headers.twig';
import yaml from './headers.yml';
import markdown from './headers.md';

export default {
    twig,
    yaml,
    markdown,
};
