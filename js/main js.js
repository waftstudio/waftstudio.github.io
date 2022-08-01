/*FIXED MENU BG DIM ON SCROLL*/
window.onscroll = function () {
  const fmenu = document.getElementById('fixedmenu');
  var y = window.innerHeight - 150;
  if (window.pageYOffset >= y) {
    fmenu.style.backgroundColor = "rgba(17,17,17,1)";
  }
  else {
    fmenu.style.backgroundColor = "rgba(17,17,17,0.4)";
  }
};
/*FIXED MENU BG DIM ON LOAD*/
document.addEventListener("DOMContentLoaded", function(event) { 
  const fmenu = document.getElementById('fixedmenu');
  var y = window.innerHeight - 150;
  if (window.pageYOffset >= y) {
    fmenu.style.backgroundColor = "rgba(0,0,0,1)";
  }
  else {
    fmenu.style.backgroundColor = "rgba(17,17,17,0.4)";
  }
});

/*OPEN AND CLOSE ABOUT POPUP*/
function exitabout() {
  document.getElementById("about-container-id").style.display = "none";
}

function openabout() {
  document.getElementById("about-container-id").style.display = "flex";
}

/*OPEN AND CLOSE IFRAME*/

function exitanim1() {
  document.getElementById("anim1").style.display = "none";
}
function openanim1() {
  document.getElementById("anim1").style.display = "flex";
}

function exitanim2() {
  document.getElementById("anim2").style.display = "none";
}
function openanim2() {
  document.getElementById("anim2").style.display = "flex";
}

function exitanim3() {
  document.getElementById("anim3").style.display = "none";
}
function openanim3() {
  document.getElementById("anim3").style.display = "flex";
}

function exitanim4() {
  document.getElementById("anim4").style.display = "none";
}
function openanim4() {
  document.getElementById("anim4").style.display = "flex";
}

function exitanim5() {
  document.getElementById("anim5").style.display = "none";
}
function openanim5() {
  document.getElementById("anim5").style.display = "flex";
}

function exitanim6() {
  document.getElementById("anim6").style.display = "none";
}
function openanim6() {
  document.getElementById("anim6").style.display = "flex";
}

function exitanim7() {
  document.getElementById("anim7").style.display = "none";
}
function openanim7() {
  document.getElementById("anim7").style.display = "flex";
}

function exitanim8() {
  document.getElementById("anim8").style.display = "none";
}
function openanim8() {
  document.getElementById("anim8").style.display = "flex";
}

function exitanim9() {
  document.getElementById("anim9").style.display = "none";
}
function openanim9() {
  document.getElementById("anim9").style.display = "flex";
}

function exitanim10() {
  document.getElementById("anim10").style.display = "none";
}
function openanim10() {
  document.getElementById("anim10").style.display = "flex";
}

function exitanim11() {
  document.getElementById("anim11").style.display = "none";
}
function openanim11() {
  document.getElementById("anim11").style.display = "flex";
}

function exitanim12() {
  document.getElementById("anim12").style.display = "none";
}
function openanim12() {
  document.getElementById("anim12").style.display = "flex";
}

function exitanim13() {
  document.getElementById("anim13").style.display = "none";
}
function openanim13() {
  document.getElementById("anim13").style.display = "flex";
}

function exitanim14() {
  document.getElementById("anim14").style.display = "none";
}
function openanim14() {
  document.getElementById("anim14").style.display = "flex";
}
function exitanim15() {
  document.getElementById("anim15").style.display = "none";
}
function openanim15() {
  document.getElementById("anim15").style.display = "flex";
}