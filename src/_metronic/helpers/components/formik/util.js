import $ from 'jquery';
import 'select2';
export const  createSelect2 = function () {
    // Check if jQuery included
    if (typeof jQuery == 'undefined') {
        return;
    }

    // Check if select2 included
    if (typeof $.fn.select2 === 'undefined') {
        return;
    }

    var elements = [].slice.call(document.querySelectorAll('[data-control="select2"], [data-kt-select2="true"]'));

    elements.map(function (element) {
        if (element.getAttribute("data-kt-initialized") === "1") {
            return;
        }

        var options = {
            dir: document.body.getAttribute('direction')
        };

        if (element.getAttribute('data-hide-search') == 'true') {
            options.minimumResultsForSearch = Infinity;
        }

        $(element).select2(options);

        element.setAttribute("data-kt-initialized", "1");
    });

    /*
    * Hacky fix for a bug in select2 with jQuery 3.6.0's new nested-focus "protection"
    * see: https://github.com/select2/select2/issues/5993
    * see: https://github.com/jquery/jquery/issues/4382
    *
    * TODO: Recheck with the select2 GH issue and remove once this is fixed on their side
    */

    if (select2FocusFixInitialized === false) {
        select2FocusFixInitialized = true;
        
        $(document).on('select2:open', function(e) {
            var elements = document.querySelectorAll('.select2-container--open .select2-search__field');
            if (elements.length > 0) {
                elements[elements.length - 1].focus();
            }                
        });
    }        
}

