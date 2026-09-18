$(window).on("load", function() {
    $(".loader").addClass("active"), setTimeout(function() {
        $(".initLoader").addClass("active");
        $(".maxRow").css('opacity', '1');
    }, 450), setTimeout(function() {
        $(".initLoader").remove()
    }, 700)
});