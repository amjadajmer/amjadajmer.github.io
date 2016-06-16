$(document).ready(function() {
    $("*:contains('&')", document.body)
        .contents()
        .each(
            function() {
                if( this.nodeType == 3 ) {
                    $(this)
                        .replaceWith( this
                            .nodeValue
                            .replace( /&/g, "<span title='and' class='amp'>&</span>" )
                        );
                }
            }
        );
});