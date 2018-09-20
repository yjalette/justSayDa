window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

$(document).ready(function(){

    $('#registration').hide();

    $(window).on('load',function(){
        $(".tag-lines").children().slideDown(2000);
    });

    $('#ready').on("click", function(){
        $("#registration").slideDown("slow");
        $("#tag-reg").hide();
    })


})
