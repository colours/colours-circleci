/**
 * Demo of textWithMedia. Pulls in textWithMedia assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'organisms/text-with-media';

// Import demo assets
import twig from './text-with-medias.twig';
import yaml from './text-with-medias.yml';
import markdown from './text-with-medias.md';

export default {
    twig,
    yaml,
    markdown,
};
