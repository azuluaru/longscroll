var drop = document.getElementById("drop");



window.onscroll = function() {

  var y = window.pageYOffset;
  console.log(y);



    if (y < 500) {drop.style.animation = "float 2s ease-in-out infinite"}
    else if (y < 800) {drop.style.animation = "drop 1s steps(6) forwards";}
<<<<<<< HEAD
    else if (y > 7920) {drop.style.animation = "splash .7s ease-in-out forwards";}
=======
    else if (y > 9273) {drop.style.animation = "splash .1s forwards";}
>>>>>>> d3ccf98e428fb683b985d75bb7369a3d2a4efc82
    }
