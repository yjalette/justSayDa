//window.onbeforeunload = function () {
//    window.scrollTo(0,0);
//};




$(document).ready(function(){

    $("#myShop").hide();


//registration

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


// hover nav

    $(".dropbtn").on("mouseover",function(){
        $(".dropdown-content").toggle();
    });


// shop

    function displayOrder(){
        var print;
        var design;
        var fabric;

        // display print

        $("#selectPrint").on("click", function () {
            let print_path = "images/" + $(this).val() + "-mir.png";
            let printImg = $("#print").attr("src", print_path);
            print = $(this).val();
        });

        // display design

        $("#selectDesign").on("click", function () {
            let design_path = "images/" + $(this).val() + ".png";
            let designImg = $("#design").attr("src", design_path);
            design = $(this).val();
        });

        // display fabric

        $("#selectFabric").on("click", function () {
            let fabric_path = "images/" + $(this).val() + ".jpg";
            let fabricImg = $("#fabric").attr("src", fabric_path);
            fabric = $(this).val();

            console.log(fabric);
        });

        // submit

        $("#buyButton").on("click", function(){
            let product_path = "images/" + design + "-" + fabric + "-" + print + ".png";

            let product = $("#productImg").attr("src", product_path);

            if ( design == null){
                alert("Please select a print");
            } else if ( fabric == null) {
                alert("Please select a design");
            } else if ( print == null){
                alert("Please select a fabric");
            } else {
                $("#myShop").show();
                $("#buyButton").hide();
            }

        });
    }

    displayOrder();


});


