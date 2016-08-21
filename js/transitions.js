$(document).ready(function() {
    var height = $(this).height();
    // $(window).load(function() {
    //     $('#loading').fadeOut('slow', function() { $(this).remove(); });
    // });
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        /* Check the location of each desired element */
        $('.left').each(function(i) {
            if ($(this).offset().top < top + 600) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(200px)'
                });
            }

        });
        $('.center').each(function(i) {
            if ($(this).offset().top < top + 600) {
                $(this).css({
                    'opacity': '1'
                });
            }

        });
        $('.right').each(function(i) {
            if ($(this).offset().top < top + 600) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(00px)'
                });
            }

        });
        $('.timeline-image').each(function(i) {
            if ($(this).offset().top < top + 600) {
                $(this).css({
                    'animation': 'cd-bounce 0.6s',
                    'opacity': '1'
                });
            }

        });
        $('.timeline-left').each(function(i) {
            if ($(this).offset().top < top + 600) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translate(0px)'
                });
            }

        });
        $('.timeline-right').each(function(i) {
            if ($(this).offset().top < top + 600) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translate(0px)'
                });
            }

        });

    });

});
