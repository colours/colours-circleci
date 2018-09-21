/**
 * This is the entry point of our widget. It doesn't know/care that it may be
 * used in Drupal, Pattern Lab, Wordpress, etc. It's just an app that
 * needs a piece of DOM to which to attach.
 *
 * Note that it exports a simple interface and also prevents itself from
 * running if the attach point is not visible on the page.
 *
 * The widget uses Redux to manage state, and jQuery to make AJAX calls and
 * HTML. A future iteration of this widget should use combineReducers() from
 * Redux to allow *all* widgets to share a single state tree.
 */

import $ from 'jquery';

function attach(attachPoint) {
    // Make absolutely sure attachPoint is jQuery object
    const $attachPoint = $(attachPoint);
    const {hash} = {hash: window.location.hash};
    const acticeTab = hash && $(`a[href="${hash}"]`);

    // Bail if our attach point is not on screen
    if (!$attachPoint.length) {
        return null;
    }

    // Set active tab based on hash
    if (acticeTab) {
        acticeTab.tab('show');
    }

    // Set hash based on active tab
    $attachPoint.on('shown.bs.tab', (e) => {
        const newHash = e.target.hash;

        if (window.history.pushState) {
            window.history.pushState(null, null, newHash);
        } else {
            window.location.hash = newHash;
        }
    });

    return $attachPoint;
}

export default attach;

