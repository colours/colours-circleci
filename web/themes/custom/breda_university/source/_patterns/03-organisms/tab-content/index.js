/**
 * tabContent
 */

// Module dependencies
import $ from 'jquery';
import 'bootstrap/js/src/util';
import 'bootstrap/js/src/tab';

import 'protons';

// Module styles
import './_tab-content.scss';

// Module template
import './_tab-content.twig';
import './_tab-content-link.twig';
import './_tab-content-link-collection.twig';
import './_tab-content-text.twig';
import './_tab-content-text-collection.twig';

import tabContent from './src';

export const name = 'tabContent';

export function disable() {}

export function enable($context) {
    // We have to glue this app to some piece of DOM
    tabContent($('#js-tab-content', $context));
}

export default enable;
