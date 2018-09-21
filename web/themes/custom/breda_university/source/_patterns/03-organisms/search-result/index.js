/**
 * searchResult
 */

import $ from 'jquery';
// Module dependencies
import 'protons';

// Module styles
import './_search-result.scss';

// Module template
import './_search-result.twig';
import './_search-result-row.twig';

export const name = 'searchResult';

export function disable() {}

export function enable() {
    function initFilter() {
        const searchField = $('#views-exposed-form-search-results-search-page .form-text');
        const filterForm = $('.search-result__filter form');
        const allCheckField = filterForm.find('#field_all');
        const filterOptions = filterForm.find('.filter-option');
        const hiddenField = filterForm.find('input[type=hidden]');

        filterOptions.on('change', function optChangeEvent() {
            if ($(this).get(0).checked) {
                allCheckField.prop('checked', false);
            }

            filterForm.submit();
        });

        allCheckField.on('change', function allChangeEvent() {
            if ($(this).get(0).checked) {
                filterOptions.each(function resetValues() {
                    $(this).prop('checked', false);
                });
            }

            filterForm.submit();
        });

        if (searchField.val()) {
            hiddenField.val(searchField.val());
        }
    }

    $(() => initFilter());
}

export default enable;
