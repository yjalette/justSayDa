let activeUserEmail = "";
let activeUserId = "";

$(document).ready(function(){
    $("#home-page").show();
    $("#shop").hide();
})

$("#signUp-form").submit(function(event){
    event.preventDefault();

    let signUpName = $("#create_name").val();
    let signUpEmail = $("#create_email").val();
    let signUpPassword = $("#create_password").val();
    console.log(signUpName, signUpEmail, signUpPassword);

    if ((!signUpName) || (signUpName.length < 1)) {
        alert('Invalid username');
    } else if ((!signUpEmail) || (signUpEmail.length < 1) || (signUpEmail.indexOf(' ') > 0)) {
        alert('Invalid email');
    } else if ((!signUpPassword) || (signUpPassword.length < 1) || (signUpPassword.indexOf(' ') > 0)) {
        alert('Invalid password');
    } else newUserObject = {
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword
    };

    $.ajax({
        type: "POST",
        url: '/users_create',
        dataType: 'json',
        data: JSON.stringify(newUserObject),
        contentType: 'application/json'
    })

    .done ( function(results) {
        console.log(results);
        activeUserEmail = results.email;
        activeUserId = results.id;
//        showOrders(activeUserEmail);
        $("#home-page").hide();
        $("#shop").show();

    })

        .fail( function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
        alert('Invalid username and password combination. Check your username and password and try again.');
    })

})


