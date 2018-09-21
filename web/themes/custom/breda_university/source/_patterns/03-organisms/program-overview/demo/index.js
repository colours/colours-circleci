/**
 * Demo of programOverview. Pulls in programOverview assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/program-overview';

// Import demo assets
import twig from './program-overviews.twig';
import yaml from './program-overviews.yml';
import markdown from './program-overviews.md';

export default {
    twig,
    yaml,
    markdown,
};
