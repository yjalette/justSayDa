let activeUserEmail = "";
let activeUserName = "";
let activeUserId = "";

$(document).ready(function(){
    $("#home-page").show();
    $("#shop").hide();
})

$("#signUp-form").submit(function(event){
    event.preventDefault();

    let name = $("#create_name").val();
    let email = $("#create_email").val();
    let password = $("#create_password").val();
//    console.log(signUpName, signUpEmail, signUpPassword);

    if ((!name) || (name.length < 1)) {
        alert('Invalid username');
    } else if ((!email) || (email.length < 1) || (email.indexOf(' ') > 0)) {
        alert('Invalid email');
    } else if ((!password) || (password.length < 1) || (password.indexOf(' ') > 0)) {
        alert('Invalid password');
    } else newUserObject = {
        name: name,
        email: email,
        password: password
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
        activeUserName = results.name;
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


