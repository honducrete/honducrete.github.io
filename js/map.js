var width = 0;
var height = 0;
const mapURL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3349.0924189529646!2d-96.7853731!3d32.9221564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c205c6da09f7b%3A0x75f54fc16db2b543!2s12700%20Hillcrest%20Rd%20%23125%2C%20Dallas%2C%20TX%2075230%2C%20USA!5e0!3m2!1sen!2shn!4v1594595333238!5m2!1sen!2shn";
$( document ).ready(setMap);

$( window ).resize(setMap);

function setMap(){
    width = $("#contact-info").width();
    height = $("#contact-info").height();
    var mapFrame = `<iframe src="${mapURL}" width="${width}" height="${height}" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    $("#map-container").html(mapFrame);
}