var firstName = "";
var lastName = "";
var email = "";
var phone = "";
var mix = "";
var yards = "";
var address = "";
var date = "";
var message = "";

$( "#btn-send-quote" ).click(function(e) {
    e.preventDefault();
    var validFirstName = checkFirstNameInputQuote();
    var validLastName = checkLastNameInputQuote();
    var validEmail = checkEMailInputQuote();
    var validPhoneNumber = checkPhoneInputQuote();
    var validMix = checkMixInputQuote();
    var validYards = checkYardsInputQuote();
    var validAddress = checkAddressTxtQuote();
    if(validFirstName && validLastName && validEmail && validPhoneNumber && validMix && validYards && validAddress){
        sendQuoteMail();
    }
});

function sendQuoteMail(){
    firstName = $( "#in-first-name-quote" ).val().trim();
    lastName = $( "#in-last-name-quote" ).val().trim();
    email = $( "#in-email-quote" ).val().trim();
    phone = $( "#in-phone-quote" ).val().replace(/[^0-9]/g,'');
    message = $( "#txt-message-quote" ).val().trim();
    mix = $( "#in-mix-quote" ).val().trim();
    yards = $( "#in-yards-quote" ).val().trim();
    date = $( "#in-date-quote" ).val().trim();
    address = $( "#txt-address-quote" ).val().trim();
    $( "#mail-name-quote" ).val(firstName+" "+lastName);
    $( "#mail-body-quote" ).val(message);
    $( "#mail-email-quote" ).val(email);
    $( "#mail-phone-quote" ).val(phone);
    $( "#mail-mix-quote" ).val(mix);
    $( "#mail-yards-quote" ).val(yards);
    $( "#mail-date-quote" ).val(date);
    $( "#mail-address-quote" ).val(address);
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

$('#in-mix-quote').on('input', function (evt) {
    checkMixInputQuote();
})

$('#in-yards-quote').on('input', function (evt) {
    checkYardsInputQuote();
})

$('#txt-address-quote').on('input', function (evt) {
    checkAddressTxtQuote();
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

function checkMixInputQuote(){
    var input = $( "#in-mix-quote" ).val();
    var valid = !(isBlank(input));
    $("#invalid-in-mix-quote").attr("hidden",valid);
    console.log("Last Name: "+ valid);
    return valid
}

function checkYardsInputQuote(){
    var input = $( "#in-yards-quote" ).val();
    var valid = !(isBlank(input));
    $("#invalid-in-yards-quote").attr("hidden",valid);
    console.log("Last Name: "+ valid);
    return valid
}

function checkAddressTxtQuote(){
    var input = $( "#txt-address-quote" ).val();
    var valid = !(isBlank(input));
    $("#invalid-txt-address-quote").attr("hidden",valid);
    console.log("Last Name: "+ valid);
    return valid
}

function isBlank(str){
    var removedSpaces = str.replace(/\s/g,"");
    return (removedSpaces.length == 0);
}