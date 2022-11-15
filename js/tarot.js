//Slider
(function(dieSlideshow) {

  dieSlideshow(document).ready(function() {
      
      var slide = dieSlideshow('.slideshow');
      var slideralles = slide.find('.sliderbox');
      var slideinhalt = slide.find('.slide');
      var buttonpfeile = slide.find('.navigationpfeile');
      var slidebreite = slideinhalt.width();
      var slideaufzaehlung = slideinhalt.length;
      var ganzeBreite = slideaufzaehlung * slidebreite;
      
      slideralles.css('width', ganzeBreite);
      slideralles.css('width', ganzeBreite);

      var klickZaehlung  = 0;

      //Slideshow kann weiter geklickt werden

      buttonpfeile.on('click', function(diePfeile) {

        diePfeile.preventDefault();
  
        if( dieSlideshow(this).hasClass('naechstes') ) {

          //geht eins voran beim klicken des "nächsten" Pfeils
          ( klickZaehlung < ( slideaufzaehlung - 1 ) ) ? klickZaehlung++ : klickZaehlung = 0;

          texteinbeldung.restart(); //Texteinblendung
        } 
        else if ( dieSlideshow(this).hasClass('vorheriges') ) {

          //geht eins zurück beim klicken des "vorherigen" Pfeils
          ( klickZaehlung > 0 ) ? klickZaehlung-- : ( klickZaehlung = slideaufzaehlung - 1 );
          
          texteinbeldung.restart(); //Texteinblendung
        }

        //TweenMax nimmt das Obejt(slideralles) mit einer dauer von sekunden(0.4) und ein Konfigurationsobjekt mit den neuen Endwerten ({x: '-' + ( slidebreite * klickZaehlung ) })
        TweenMax.to(slideralles, 0.4, {x: '-' + ( slidebreite * klickZaehlung ) })

      });
            
    });

  })
  
  (jQuery);
  gsap.config({nullTargetWarn:false}); 

  //Texteinbledung (Fade) beim Klick
  
  $(document).ready(function(){
    var einblendung = $('.slideshowtitel');
     texteinbeldung = new TimelineMax();
     texteinbeldung.add(TweenLite.from(einblendung, 2.5, {
       x: 0,
       y: 260,
       z: 0,
       autoAlpha: 0,
       scaleX:1 ,
       scaleY:1,
       rotationX:0,
       rotationY:0,
       skewX: 0,
       skewY: 0,
       transformPerspective: "600",
       ease: Power4.easeInOut,
     },0.10));


   });