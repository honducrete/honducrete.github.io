var firstName = "";
var lastName = "";
var email = "";
var phone = "";
var message = "";


$( "#btn-send-message" ).click(function(e) {
    e.preventDefault();
    var validFirstName = checkFirstNameInput();
    var validLastName = checkLastNameInput();
    var validEmail = checkEMailInput();
    var validPhoneNumber = checkPhoneInput();
    var validMessage = checkMessageInput();
    if(validFirstName && validLastName && validEmail && validPhoneNumber && validMessage){
        sendContactMail();
    }
});

function sendContactMail(){
    firstName = $( "#in-first-name" ).val().trim();
    lastName = $( "#in-last-name" ).val().trim();
    email = $( "#in-email" ).val().trim();
    phone = $( "#in-phone" ).val().replace(/[^0-9]/g,'');
    message = $( "#txt-message" ).val().trim();
    $( "#mail-name" ).val(firstName+" "+lastName);
    $( "#mail-body" ).val(message);
    $( "#mail-email" ).val(email);
    $( "#mail-phone" ).val(phone);
    $( "#form-contact" ).submit();
}

$('#in-first-name').on('input', function (evt) {
    checkFirstNameInput();
})

$('#in-last-name').on('input', function (evt) {
    checkLastNameInput();
})

$('#in-email').on('input', function (evt) {
    checkEMailInput();
})

$('#in-phone').on('input', function (evt) {
    checkPhoneInput();
})

$('#txt-message').on('input', function (evt) {
    checkMessageInput();
})

function checkFirstNameInput(){
    var input = $( "#in-first-name" ).val();
    var valid = !(isBlank(input));
    $("#invalid-in-first-name").attr("hidden",valid);
    console.log("First Name: "+ valid);
    return valid;
}

function checkLastNameInput(){
    var input = $( "#in-last-name" ).val();
    var valid = !(isBlank(input));
    $("#invalid-in-last-name").attr("hidden",valid);
    console.log("Last Name: "+ valid);
    return valid
}

function checkEMailInput(){
    var input = $( "#in-email" ).val();
    var valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(input);
    $("#invalid-in-email").attr("hidden",valid);
    console.log("Email: "+ valid);
    return valid;
}

function checkPhoneInput(){
    var input = $( "#in-phone" ).val();
    var onlyNumbers = input.replace(/[^0-9]/g,'');
    var valid = (onlyNumbers.length == 10) || (isBlank(input));
    $("#invalid-in-phone").attr("hidden", valid);
    console.log("Phone number: "+ valid);
    return valid;
}

function checkMessageInput(){
    var input = $( "#txt-message" ).val();
    var valid = !(isBlank(input));
    $("#invalid-txt-message").attr("hidden",valid);
    console.log("Message: "+ valid);
    return valid;
}

function isBlank(str){
    var removedSpaces = str.replace(/\s/g,"");
    return (removedSpaces.length == 0);
}
