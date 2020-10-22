$(document).ready(function () {
    var $w;
    $w = $('.page .waterfall').width() + 3;

    var gallery = $('.photos').gallerify({
        margin: 0,
        mode: 'bootstrap',
        lastRow: 'adjust',
        jsSetup: true,
        width: $w
    });

    // function resize() {
    //     $w = $('.page .waterfall').width() + 3;
    //     var gallery = $('.photos').gallerify({
    //         margin: 0,
    //         mode: 'bootstrap',
    //         lastRow: 'adjust',
    //         jsSetup: true,
    //         width: $w
    //     });
    // }

     // //页面缩放事件
    // $(window).resize(function () {
    //     $w = $('.page .waterfall').width() + 3;
    // });

})


