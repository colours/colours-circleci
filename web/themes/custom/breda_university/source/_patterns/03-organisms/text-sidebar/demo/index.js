/**
 * Demo of textSidebar. Pulls in textSidebar assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/text-sidebar';

// Import demo assets
import twig from './text-sidebars.twig';
import yaml from './text-sidebars.yml';
import markdown from './text-sidebars.md';

export default {
    twig,
    yaml,
    markdown,
};
