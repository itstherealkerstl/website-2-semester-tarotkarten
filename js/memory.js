// Array mit allen Karten
let karten = document.getElementsByClassName("tarotkarte");
let tarotkarten = [...karten];

//KartenArray mischt die Karten zufällig

function mischen(karten) {

    var aktuellerZustand = karten.length, aktuellerWert, zufall;

    //strenges nicht gleich !==
    while (aktuellerZustand !== 0) {

        zufall = Math.floor(Math.random() * aktuellerZustand);
        aktuellerZustand = aktuellerZustand - 1;

        aktuellerWert = karten[aktuellerZustand];
        karten[aktuellerZustand] = karten[zufall];
        karten[zufall] = aktuellerWert;
    }

    return karten;
};


//Kartendeck
const deck = document.getElementById("tarotkartendeck");

//kartenzüge variable
let züge = 0;
let zaehler = document.querySelector(".züge");

// Array für die erratenen gleichen Karten
var geöfnetteKarten = [];

//Interval deklarieren
let zeitinterval;

// beim laden werden die karten gemischt
document.body.onload = spielStart();

//Spiel srart

function spielStart(){  
 
geöfnetteKarten = []; //löscht das Kartenarray
tarotkarten = mischen(tarotkarten); // mischt die Karten

//mischt die Karten
for (var i = 0; i < tarotkarten.length; i++){

    deck.innerHTML = "";

    [].forEach.call(tarotkarten, function(diekarten) {
        deck.appendChild(diekarten);
    });

    tarotkarten[i].classList.remove("zeigen", "öffnen", "gleich", "deaktiviert");
}

//Kartenzüge
züge = 0;
zaehler.innerHTML = züge; 

//Zeit am Beginn
var zeit = document.querySelector(".zeit"); 
zeit.innerHTML = "0 Minuten 0 Sekunden";

stunde = 0;
minute = 0; 
sekunde = 0;

clearInterval(zeitinterval);
}

// var speichert eine funktion die die einzelnen klassennamen umschaltet
var karteZeigen = function (){
    this.classList.toggle("öffnen", "zeigen", "deaktiviert");
};

// zwei gleiche karten variable
let allekarten = document.getElementsByClassName("gleich");

// benötigte Zeit während des Spiels
var stunde = 0;
var minute = 0;
var sekunde = 0;

var zeit = document.querySelector(".zeit");
var uhrzeit;

//die Karten sind gleich oder nichtgleich
function kartePasst() {

    geöfnetteKarten.push(this);
    var allekarten = geöfnetteKarten.length;

    //drei = ist ein strenges istgleich  -- typ und operator inhalt müssen gleich sein
    if(allekarten === 2){
        
        //Zähler für die Kartenzüge vom Spieler
        züge++;

        //Züge werden hinzugefügt
        zaehler.innerHTML = züge;
    
        //Zeit startet beim ersten Klick
        if(züge == 1){
            stunde = 0;
            minute = 0; 
            sekunde = 0;

            //Zeit Intervall startet
            uhrzeit = setInterval(function(){
    
                //Text wird hinzugefügt und beginnt an zu "laufen"
                zeit.innerHTML = minute + " Minuten " + sekunde + " Sekunden";
                sekunde++;

                //Zeit richtig darstellen Sekunden
                if(sekunde == 60){
                    minute++;
                    sekunde = 0;
                }
                //Zeit richtig darstellen Minuten

                if(minute == 60){
                    stunde++;
                    minute = 0;
                }      

            },1000);
    
        }
        if(geöfnetteKarten[1].type === geöfnetteKarten[0].type){

            // wenn die Karten gelich sind muss "gleich", "zeigen" mit "deaktivieren" und "öffnen" wieder "resetet werden" 
            // ansonsten bleiben die karten immer offen 

            geöfnetteKarten[0].classList.add("gleich", "deaktiviert");
            geöfnetteKarten[1].classList.add("gleich", "deaktiviert");
        
            geöfnetteKarten[0].classList.remove("zeigen", "öffnen");
            geöfnetteKarten[1].classList.remove("zeigen", "öffnen");
        
            
            //Array
            geöfnetteKarten = [];

        } else {

            // wenn die Tarotkarten nicht gleich sind dann werden sie wieder geschlossen

            geöfnetteKarten[0].classList.add("sindnichtgleich");
            geöfnetteKarten[1].classList.add("sindnichtgleich");
        
            Array.prototype.filter.call(tarotkarten, function(karten){
                karten.classList.add('deaktiviert');
            });
        

            // Timeout 1100ms - wenn die karten nicht gleich sind umklappen
            setTimeout(function(){
                geöfnetteKarten[0].classList.remove("zeigen", "öffnen","sindnichtgleich");
                geöfnetteKarten[1].classList.remove("zeigen", "öffnen","sindnichtgleich");
        
                Array.prototype.filter.call(tarotkarten, function(karten){
                    karten.classList.remove('deaktiviert');
            
                    for(var i = 0; i < allekarten.length; i++){ //zwei gleiche karten speicher let
                        allekarten[i].classList.add("deaktiviert"); 
                    }
            
                });

                //Array
                geöfnetteKarten = [];
        
            },1100);
        
        }
    }
};

//Schleife für das Klicken der Karten 
var klicks = 0;
do {
    karten = tarotkarten[klicks];
    karten.addEventListener("click", karteZeigen);
    karten.addEventListener("click", kartePasst);
    karten.addEventListener("click", popupKarten);
    klicks++;
} while(klicks < tarotkarten.length);

// Variable für das schließen des Popups
let schließendespopups = document.querySelector(".schließen"); 

// Popup Variable
let popupamende = document.getElementById("popup1");


//popup wenn alle kartenpaare gefunden

function popupKarten(){

    if (allekarten.length == 24){

        //Uhrzeit wird gelöscht
        clearInterval(zeitinterval);

        //Zeit wird hinzugefügt
        benötigteZeit = zeit.innerHTML;

        //zeigt das Popup
        popupamende.classList.add("zeigen");


        //zeigt die Anzahl der Kartenzüge
        document.getElementById("letzerzug").innerHTML = züge;

        //zeigt die benötigte Spielzeit
        document.getElementById("benötigteZeit").innerHTML = benötigteZeit;


        //Popup wird am X geschlossen und das Spiel neu gestartet
        schließendespopups.addEventListener("click", function(e){
            popupamende.classList.remove("zeigen");
            spielStart();
        });
    };
}

//nochmal Spielen - entfernt Popup und startet das Spiel neu
function nochmalSpielen(){ 
    popupamende.classList.remove("zeigen");
    spielStart();
}

//Überschrift Animation
var textoben = document.querySelector('.ueberschrift');
textoben.innerHTML = textoben.textContent.replace(/\S/g, "<span class='buchstabe'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ueberschrift .buchstabe',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 10,
    delay: (el, i) => 200 * (i+1)
  }).add({
    targets: '.ueberschrift',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  //Mauszeiger Kreis
  var maus = document.getElementById('maus');

  document.addEventListener('mousemove', function(kreis) {
    var kreisx = kreis.clientX;
    var kreisy = kreis.clientY;

    maus.style.left = kreisx + "px";
    maus.style.top = kreisy + "px";
  }); 