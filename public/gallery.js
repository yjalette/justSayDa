$(function() {
    var selectedClass = "";
    $(".leather, .silk, .denim").hide();
    $(".snd").hide();



    $(".fil-cat").click(function(){
        $("#showMore").hide();
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });

    $("#showMore").on("click", function(){
        $(".snd").show();
    })
});
