var firstName = "";
var lastName = "";
var email = "";
var phone = "";
var message = "";
const emailHonducrete = "honducrete.inc@gmail.com";
$( "#btn-send" ).click(function(e) {

    if (!email){
        $( "#invalid-in-email" ).attr("hidden", false);
    }else{
        var isEmail = false;
        var isPhoneNumber = false;
        $( "#invalid-in-contact" ).attr("hidden", true);
        var url=`mailto:${emailHonducrete}?subject=${firstName}  [Website contact]`;
        $( "#form-contact" ).attr("action", url);
        $( "#mail-body" ).val(message);
        $( "#mail-contact" ).val(contact);
        $( "#form-contact" ).submit();
    }
});

$( "#btn-send" ).click(function(e) {
    e.preventDefault();
    var validFirstName = checkFirstNameInput();
    var validLastName = checkLastNameInput();
    var validEmail = checkEMailInput();
    var validPhoneNumber = checkPhoneInput();
    var validMessage = checkMessageInput();
    if(((validFirstName && validLastName) && (validEmail && validPhoneNumber)) && validMessage){
        sendContactMail();
    }
});

function sendContactMail(){
    firstName = $( "#in-first-name" ).val();
    lastName = $( "#in-last-name" ).val();
    email = $( "#in-email" ).val();
    phone = $( "#in-phone" ).val().replace(/[^0-9]/g,'');
    message = $( "#txt-message" ).val();
    var url=`mailto:${emailHonducrete}?subject=${firstName} ${lastName} [Website contact]`;
    $( "#form-contact" ).attr("action", url);
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
    var isBlank = !input;
    $("#valid-in-first-name").attr("hidden",isBlank);
    $("#invalid-in-first-name").attr("hidden",!isBlank);
    return !isBlank
}

function checkLastNameInput(){
    var input = $( "#in-last-name" ).val();
    var isBlank = !input;
    $("#valid-in-last-name").attr("hidden",isBlank);
    $("#invalid-in-last-name").attr("hidden",!isBlank);
    return !isBlank
}

function checkEMailInput(){
    var input = $( "#in-email" ).val();
    var isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(input);
    $("#valid-in-email").attr("hidden",!isEmail);
    $("#invalid-in-email").attr("hidden",isEmail);
    return isEmail;
}

function checkPhoneInput(){
    var input = $( "#in-phone" ).val();
    input = input.replace(/[^0-9]/g,'');
    var isPhone = (input.length == 10);
    var isPhoneEmpty = !input;
    if(isPhoneEmpty){
        $("#invalid-in-phone").attr("hidden",isPhoneEmpty);
        $("#valid-in-phone").attr("hidden",isPhoneEmpty);
    }else if(isPhone){
        $("#invalid-in-phone").attr("hidden",isPhone);
        $("#valid-in-phone").attr("hidden",!isPhone);
    }else{
        $("#invalid-in-phone").attr("hidden",isPhone);
        $("#valid-in-phone").attr("hidden",!isPhone);
    }
    return isPhone || isPhoneEmpty;
}

function checkMessageInput(){
    var input = $( "#txt-message" ).val();
    var isBlank = !input;
    $("#valid-txt-message").attr("hidden",isBlank);
    $("#invalid-txt-message").attr("hidden",!isBlank);
    return !isBlank;
}