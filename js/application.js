$(document).ready(function() {

    $('#Filters button').on('click', function() {
        var count = $('.clicked').length;
        $(this).toggleClass('clicked');
        $(this).toggleClass('glyph');
        var count = $('.clicked').length;

    });

});