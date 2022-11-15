var popup = document.getElementById("popup");
var num = document.getElementById("nummer");

var w = window.innerWidth;

var versuch = 0;
var speed = 1;

var intervall;

var audio;


function mitsroll() {
    var positionTop = window.pageYOffset;
    popup.style.top = positionTop + 200 + "px";
}

function popupeinblenden() {   
    nummer();
    verstecken();
    setTimeout(
        function () {
            verstecken();
            intervall = setInterval(loop,reinfahren);
        }, 4000);
        audio = new Audio('js/batman.mp3');
}

var xPos = 1300;

function reinfahren(){
    xPos = xPos-speed;
    if(xPos>=600){
        popup.style.right = xPos + "px";
    } 
}

function popupschliessen() {
    versuch++;
    if (versuch <= 3) {
        if (versuch == 1) {
            verstecken();
            audio.play();
            setTimeout(
                function () {
                    verstecken();
                }, 4000);
        } else {
            jump();
        }
    } else {
        verstecken();
    }
}

function verstecken() {
    console.log("versteckt");
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


function popuprandom() {
    popup.style.top = Math.round(Math.random() * 300) + "px";
    popup.style.left = Math.round(Math.random() * 600) + "px";
}

function anderefarbe() {
    popup.style.color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function loop() {
    speed++;
    if (speed < w / 2) popup.style.right = w - speed - 210 + "px";
}

function nummer() {
    var x = Math.floor(Math.random() * 23) + 1;
    nachricht("Erhalte " + x + " Stück gratis!");
}

function jump() {
    nummer();
    anderefarbe();
    popuprandom();
}

function nachricht(stk) {
    num.innerHTML = stk;
}

var transparenz = 0;
var el = document.getElementById('popup');

window.setInterval(function(){
  el.style.backgroundColor = 'rgba(241,208,6,'+ Math.abs(Math.sin(transparenz)) +')';
  transparenz += 0.01;
}, 10);



    
