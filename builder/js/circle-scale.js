$(function(){
    var $circles = $('.circle');
    var circleInFocus = null;


    $circles.each(function(index, elem){
        var $elem = $(elem);
        var pos = $elem.position();
        $(elem).data('orig-x', pos.left);
        $(elem).data('orig-y', pos.top);
    });

    var reset = function(){
        if(circleInFocus){
            $(circleInFocus).transition({x:0,y:0});
        };
    };

    $circles.focus(function(e){
        reset();
        circleInFocus = this;
        var $doc = $(document);
        var centerX = $doc.width() / 2;
        var centerY = $doc.height() / 2;
        var $circle = $(this);
        var origX = $circle.data('orig-x');
        var origY = $circle.data('orig-y');
        $(this).transition({x:centerX - origX,y:centerY-origY});
    });

    $circles.blur(function(e){
        reset();
    });

});
