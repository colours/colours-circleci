/**
 * Demo of programOverviewIntro. Pulls in programOverviewIntro assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/program-overview-intro';

// Import demo assets
import twig from './program-overview-intros.twig';
import yaml from './program-overview-intros.yml';
import markdown from './program-overview-intros.md';

export default {
    twig,
    yaml,
    markdown,
};
