var firstName = "";
var lastName = "";
var email = "";
var phone = "";
var message = "";

$( "#btn-send-quote" ).click(function(e) {
    e.preventDefault();
    var validFirstName = checkFirstNameInputQuote();
    var validLastName = checkLastNameInputQuote();
    var validEmail = checkEMailInputQuote();
    var validPhoneNumber = checkPhoneInputQuote();
    var validMessage = checkMessageInputQuote();
    if(validFirstName && validLastName && validEmail && validPhoneNumber && validMessage){
        sendQuoteMail();
    }
});

function sendQuoteMail(){
    firstName = $( "#in-first-name-quote" ).val().trim();
    lastName = $( "#in-last-name-quote" ).val().trim();
    email = $( "#in-email-quote" ).val().trim();
    phone = $( "#in-phone-quote" ).val().replace(/[^0-9]/g,'');
    message = $( "#txt-message-quote" ).val().trim();
    $( "#mail-name-quote" ).val(firstName+" "+lastName);
    $( "#mail-body-quote" ).val(message);
    $( "#mail-email-quote" ).val(email);
    $( "#mail-phone-quote" ).val(phone);
    $( "#form-quote" ).submit();
}

$('#in-first-name-quote').on('input', function (evt) {
    checkFirstNameInputQuote();
})

$('#in-last-name-quote').on('input', function (evt) {
    checkLastNameInputQuote();
})

$('#in-email-quote').on('input', function (evt) {
    checkEMailInputQuote();
})

$('#in-phone-quote').on('input', function (evt) {
    checkPhoneInputQuote();
})

$('#txt-message-quote').on('input', function (evt) {
    checkMessageInputQuote();
})

function checkFirstNameInputQuote(){
    var input = $( "#in-first-name-quote" ).val();
    var valid = !(isBlank(input));
    $("#invalid-in-first-name-quote").attr("hidden",valid);
    console.log("First Name: "+ valid);
    return valid;
}

function checkLastNameInputQuote(){
    var input = $( "#in-last-name-quote" ).val();
    var valid = !(isBlank(input));
    $("#invalid-in-last-name-quote").attr("hidden",valid);
    console.log("Last Name: "+ valid);
    return valid
}

function checkEMailInputQuote(){
    var input = $( "#in-email-quote" ).val();
    var valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(input);
    $("#invalid-in-email-quote").attr("hidden",valid);
    console.log("Email: "+ valid);
    return valid;
}

function checkPhoneInputQuote(){
    var input = $( "#in-phone-quote" ).val();
    var onlyNumbers = input.replace(/[^0-9]/g,'');
    var valid = (onlyNumbers.length == 10) || (isBlank(input));
    $("#invalid-in-phone-quote").attr("hidden", valid);
    console.log("Phone number: "+ valid);
    return valid;
}

function checkMessageInputQuote(){
    var input = $( "#txt-message-quote" ).val();
    var valid = !(isBlank(input));
    $("#invalid-txt-message-quote").attr("hidden",valid);
    console.log("Message: "+ valid);
    return valid;
}

function isBlank(str){
    var removedSpaces = str.replace(/\s/g,"");
    return (removedSpaces.length == 0);
}