$( document ).ready(function() {
    /*var userLang = navigator.language || navigator.userLanguage; 
    if (userLang == "es" || userLang == "es-ES" || userLang == "esES"){
        window.location.href = 'es.html';
    }*/
    resizeLogo();

    if(window.location.href.indexOf('#contact-modal') != -1) {
        $('#contact-modal').modal('show');
    }

    if(window.location.href.indexOf('#quote-modal') != -1) {
        $('#quote-modal').modal('show');
    }

});

$( window ).resize(function() {
    resizeLogo();
});

function resizeLogo(){
    var width = $("#header-name").width();
    if(width > 350){
        $("#header-logo").width(350);
    }else{
        $("#header-logo").width(width);
    }
    $("#header-logo").attr("hidden",false);
}