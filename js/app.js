$("#navtoggle").click(function () {
    var $menu = $("header nav ul");

    if ($menu.is(':visible')) {
        // Slide away
        $menu.slideUp();
    }
    else {
        // Slide in
        $menu.slideDown();
    }
});
