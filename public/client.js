//window.onbeforeunload = function () {
//    window.scrollTo(0,0);
//};



$(document).ready(function(){

//top nav

    $('#top-login').on("click", function(){
        $("#tag-reg").slideDown();
    });

    $("#top-login").click(function() {
        $('html,body').animate({
            scrollTop: $("#tag-reg").offset().top
        },
                               'slow');
    });



//bottom nav

    $('#link-login').on("click", function(){

        $("#signIn-form").show().slideDown("fast");
        $("#signUp-form").hide();
    })

    $('#link-signup').on("click", function(){

        $("#signUp-form").show();
        $("#signIn-form").hide();
    })




    $("#log-tab").on("click", function(){

        $("#log-tab").addClass("active");
        $("#reg-tab").removeClass("active");
        $("#signIn-form").css("display", "block");
        $("#signUp-form").hide();

    });

    $("#reg-tab").on("click", function(){
        $("#reg-tab").addClass("active");
        $("#log-tab").removeClass("active");
        $("#signUp-form").show();
        $("#signIn-form").hide();


    });





})


