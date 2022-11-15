//Überschrift Animation

var textoben = document.querySelector('.ueberschrift');
textoben.innerHTML = textoben.textContent.replace(/\S/g, "<span class='buchstabe'>$&</span>"); //die Buchstaben werden in ein span umgewandelt (anime script)

anime.timeline({loop: true})
  .add({
    targets: '.ueberschrift .buchstabe',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 10,
    delay: (el, i) => 200 * (i+1)
  }).add({
    targets: '.ueberschrift',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //Kreis über dem Mauszeiger

  var maus = document.getElementById('maus');

  document.addEventListener('mousemove', function(kreis) {
    var kreisx = kreis.clientX;
    var kreisy = kreis.clientY;

    maus.style.left = kreisx + "px";
    maus.style.top = kreisy + "px";
  }); 