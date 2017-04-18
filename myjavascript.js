// external js: isotope.pkgd.js

var $grid = $('.grid').imagesLoaded(function() {
    // init Isotope after all images have loaded
    $grid.isotope({
        itemSelector: '.student',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-sizer'
        }
    });

    // store filter for each group
    var filters = [];
    var numFilters = 0;
    var iso = $grid.data('isotope');
    var $filterCount = $('.filter-count');

    // change is-checked class on buttons
    $('.filters').on('click', 'button', function(event) {
        var $target = $(event.currentTarget);
        $target.toggleClass('is-checked');
        var isChecked = $target.hasClass('is-checked');
        var filter = $target.attr('data-filter');
        if (isChecked && numFilters < 3) {
            addFilter(filter);
        } else if (isChecked && numFilters >= 3) {
            $target.toggleClass('is-checked');
        } else {
            removeFilter(filter);
        }
        // filter isotope
        // group filters together, inclusive
        $grid.isotope({ filter: filters.join(',') });
        updateFilterCount();

    });

    function updateFilterCount() {
        $filterCount.text('Showing ' + iso.filteredItems.length + ' of 48 Designers');
    }

    updateFilterCount();

    function addFilter(filter) {
        if (numFilters < 3) {
            if (filters.indexOf(filter) == -1) {
                filters.push(filter);
                numFilters = numFilters + 1;
            }
        }
    }

    function removeFilter(filter) {
        var index = filters.indexOf(filter);
        if (index != -1) {
            filters.splice(index, 1);
            numFilters = numFilters - 1;
        }
    }


});