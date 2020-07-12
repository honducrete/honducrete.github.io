var name = "";
var contact = "";
var message = "";
const emailHonducrete = "honducrete@gmail.com";
$( "#btn-send" ).click(function(e) {
    e.preventDefault();
    name = $( "#in-name" ).val();
    contact = $( "#in-contact" ).val();
    message = $( "#txt-message" ).val();
    console.log(message);
    if (!contact){
        $( "#invalid-in-contact" ).attr("hidden", false);
    }else{
        var isEmail = false;
        var isPhoneNumber = false;
        $( "#invalid-in-contact" ).attr("hidden", true);
        var url=`mailto:${emailHonducrete}?subject=${name} [Website contact]`;
        $( "#form-contact" ).attr("action", url);
        $( "#mail-body" ).val(message);
        $( "#mail-contact" ).val(contact);
        $( "#form-contact" ).submit();
    }
});
