window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

$(document).ready(function(){
    $(window).scroll(function(){
        $(".tag-lines").children().slideDown(2000, function(){
            $(".tag-lines").children().animate({'height': '300px'});
            $(".tag-lines").css({'background-color': '#EE523F'});
        });
    });

})
