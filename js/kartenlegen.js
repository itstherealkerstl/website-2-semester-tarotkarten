//Bilder Array
bilder = ['gehaengte.jpg','gerechtigkeit.jpg','herscherin.jpg','hierophant.jpg','hohenpristerin.jpg',
'liebende.jpg','mond.jpg','narr.jpg','rad.jpg','sonne.jpg','teufel.jpg','turm.jpg']
  
//zieht eine zufällige Karte
function zufälligeKarte(){

    //holt sich ein zufälliges Bild aus dem Array
    random_index = Math.floor(Math.random() * bilder.length);
  
    //Nimmt ein Bild aus dem Array
    nimmtbild = bilder[random_index]
  
    //Bild wird hinzugefügt src
    document.getElementById('image_shower').src = `../img/${nimmtbild}`

    //css "alles" wird gezeigt
    document.getElementById('alles').style.display = 'flex';

    //Bild wird gezeigt "flex"
    document.getElementById('image_shower').style.display = 'flex';

    //Wenn die Karte gezogen wurde verschwindet der Button
    document.getElementById('button_container').style.display = 'none';


//Die einzlenen Karten mit ihrer Beschreibung

    if (nimmtbild == 'gehaengte.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Heute gilt die Karte als Symbol der Einweihung und der dazu notwendigen Geduld und die Fähigkeit, die Welt aus einem anderen Blickwinkel zu betrachten.";
    }

    if (nimmtbild == 'gerechtigkeit.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Die Karte symbolisiert Fairness, Verantwortlichkeit, Regelung von öffentlichen Angelegenheiten, Gerechtigkeit und Richterspruch.";
    }

    if (nimmtbild == 'herscherin.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Heute gilt die Karte als Symbol der Einweihung und der dazu notwendigen Geduld und die Fähigkeit, die Welt aus einem anderen Blickwinkel zu betrachten.";
    }

    if (nimmtbild == 'hierophant.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Der Hierophant repräsentiert den Willen Gottes und dessen Auslegung auf der Erde.";
    }

    if (nimmtbild == 'hohenpristerin.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Die Offenlegung eines schlicht- alltägliches Geheimnisses oder auch die Verkörperung von Intuition und Weisheit.";
    }

    if (nimmtbild == 'liebende.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Die Karte repräsentiert Beziehungen und Optionen. Wird auch in einigen Decks mit der Karte Die Zwillinge in Verbindung gebracht.";
    }

    if (nimmtbild == 'mond.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Heute gilt die Karte als Symbol der Einweihung und der dazu notwendigen Geduld und die Fähigkeit, die Welt aus einem anderen Blickwinkel zu betrachten.";
    }

    if (nimmtbild == 'narr.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Der Narr symbolisiert die jugendliche Unwissenheit und Unbekümmertheit, das sorglose Ins-Leben-Hineintreten.";
    }

    if (nimmtbild == 'rad.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Die Karte symbolisiert das Eingebundensein in das Wirken des Lebens, ins Schicksalsrad und zeigt uns, dass keine Situation ewig herrscht.";
    }

    if (nimmtbild == 'sonne.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Die Sonne symbolisiert die Hoffnung, den Idealismus, das Streben nach „höheren“ Werten. Sie steht aber auch für geistige Klarheit, also nicht für Illusionen und Utopien.";
    }

    if (nimmtbild == 'teufel.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Der Teufel symbolisiert das Totale und Widerspruchslose, seine Thematik ist die Macht und die Ohnmacht. Auf dem Weg des Helden symbolisiert sie die Gewissensprüfung.";
    }

    if (nimmtbild == 'turm.jpg') {
      document.getElementById('textkarten').style.display = 'flex';
      document.getElementById('textkarten').innerHTML = "Der Turm symbolisiert das Gefängnis der Gedankenkonstrukte, Weltbilder usw., in das wir Menschen uns selber einspinnen.";
    }

  }

  
