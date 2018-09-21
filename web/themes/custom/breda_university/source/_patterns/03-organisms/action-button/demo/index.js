/**
 * Demo of actionButton. Pulls in actionButton assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/action-button';

// Import demo assets
import twig from './action-buttons.twig';
import yaml from './action-buttons.yml';
import markdown from './action-buttons.md';

export default {
    twig,
    yaml,
    markdown,
};
