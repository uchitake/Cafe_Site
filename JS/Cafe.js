$(document).ready(function () {
    $('#sections').fullpage({
        resize: false,
        slidesNavigation: false,
        easing: 'easeInOutExpo',
        paddingTop: 100,
        menu: '#menu',
        anchors: ['1page', '2page', '3page', '4page'] //メニューのアンカー先
    });

    $(function () {
        $("#slide_menu_btn").on("click", function () {
            $("#Navi_Area").toggleClass('open');
        });

        $('#slide_menu_btn').click(function () {
            $(this).toggleClass('active');
        });
    });


    $(function () {
        $(".section").on("click", function () {
            $("#Navi_Area").toggleClass('open', false);
            $("#slide_menu_btn").toggleClass('active', false);
        });
    });
});
