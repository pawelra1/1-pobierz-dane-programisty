'use strict';



$( function() {

var button = document.getElementById('button');
function pobierzDane(event) {


    
//pobranie JSON
    
    $.getJSON(
"https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
function (data) {
   $( "#dane-programisty" ).html( "<p>" + "Imię: " + data.imie + " " + data.nazwisko + ", " + "Zawód: " + data.zawod + ", " + "Firma: " + data.firma + "</p>" );
}
);
    
//kończe pobierać JSONa
    
}


button.onclick = pobierzDane;

} );