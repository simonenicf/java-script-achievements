let dagen = document.getElementById("dag");
let jaren = document.getElementById("jaar");
let maanden = document.getElementById("maand");

let dezeDag = new Date;
dezeDag = dezeDag.getDate();

let dezeMaand = new Date;
dezeMaand = dezeMaand.getMonth();
dezeMaand =+ 1;

let dezeJaar = new Date;
dezeJaar = dezeJaar.getFullYear();

function toonDatum(){
    dagen.innerHTML = "vandaag is dag "+dezeDag;
    maanden.innerHTML = "van de maand " + dezeMaand;
    jaren.innerHTML = "En is het jaar: "+ dezeJaar;
}

window.addEventListener('DOMContentLoaded', toonDatum);