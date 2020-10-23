$(document).ready(function () {
        var $w;
        $w = $('.page .waterfall').width() + 3;

        var gallery = $('.photos').gallerify({
            margin: 0,
            mode: 'default',
            lastRow: 'adjust',
            width: $w
        });

})



