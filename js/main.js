$( document ).ready(function() {
    /*var userLang = navigator.language || navigator.userLanguage; 
    if (userLang == "es" || userLang == "es-ES" || userLang == "esES"){
        window.location.href = 'es.html';
    }*/
    resizeLogo();
    
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
}