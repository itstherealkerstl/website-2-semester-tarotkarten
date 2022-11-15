
  var maus = document.getElementById('maus');
  document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    maus.style.left = x + "px";
    maus.style.top = y + "px";
  }); 