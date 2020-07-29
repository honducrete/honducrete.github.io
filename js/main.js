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

    var mixHelpPopoverContent = '<p>Some of the most common mixes are:</p>'+
            '<ul>'+
                '<li>3000psi</li>'+
                '<li>3500psi</li>'+
                '<li>4000psi</li>'+
                '<li>4500psi</li>'+
                '<li>5000psi</li>'+
                '<li>122 Pea Gravel</li>'+
                '<li>116LP Pump Mix</li>'+
            '</ul>';

    $('#mix-help-popover').popover({
        placement : 'top',
        html : true,
        title : 'Common Mixes <a href="#" class="close" data-dismiss="alert">&times;</a>',
        content : mixHelpPopoverContent,
        trigger: 'focus'
    });

    $(document).on("click", ".popover .close" , function(evt){
        evt.preventDefault();
        $(this).parents(".popover").popover('hide');
    });
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