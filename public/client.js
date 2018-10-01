window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

$(document).ready(function(){


    $(window).on('scroll',function(){
        $(".tag-lines").children().slideDown(2000);
    });



    $('#top-login').on("click", function(){
        $("#signIn-form").show();
        $("#signUp-form").hide();
    })

    $('#top-signup').on("click", function(){
        $("#signUp-form").slideDown();
        $("#signIn-form").hide();
    })



    $('#link-login').on("click", function(){
        $("#signIn-form").show();
        $("#signUp-form").hide();
    })

    $('#link-signup').on("click", function(){
        $("#signUp-form").show();
        $("#signIn-form").hide();
    })


})
