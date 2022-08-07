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

/*OPEN AND CLOSE IFRAME POPUP*/

//ANIM

function exitanim1() {
  document.getElementById("anim1").style.display = "none";
}
function openanim1() {
  document.getElementById("anim1").style.display = "flex";
}

function exitanim2() {
  document.getElementById("anim2").style.display = "none";
  stopVideo();
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

// MODEL

function exitmodel1() {
  document.getElementById("popmodel1").style.display = "none";
}
function openmodel1() {
  document.getElementById("popmodel1").style.display = "flex";
}

function exitmodel2() {
  document.getElementById("popmodel2").style.display = "none";
}
function openmodel2() {
  document.getElementById("popmodel2").style.display = "flex";
}

function exitmodel3() {
  document.getElementById("popmodel3").style.display = "none";
}
function openmodel3() {
  document.getElementById("popmodel3").style.display = "flex";
}

function exitmodel4() {
  document.getElementById("popmodel4").style.display = "none";
}
function openmodel4() {
  document.getElementById("popmodel4").style.display = "flex";
}

function exitmodel5() {
  document.getElementById("popmodel5").style.display = "none";
}
function openmodel5() {
  document.getElementById("popmodel5").style.display = "flex";
}

function exitmodel6() {
  document.getElementById("popmodel6").style.display = "none";
}
function openmodel6() {
  document.getElementById("popmodel6").style.display = "flex";
}

function exitmodel7() {
  document.getElementById("popmodel7").style.display = "none";
}
function openmodel7() {
  document.getElementById("popmodel7").style.display = "flex";
}

function exitmodel8() {
  document.getElementById("popmodel8").style.display = "none";
}
function openmodel8() {
  document.getElementById("popmodel8").style.display = "flex";
}

function exitmodel9() {
  document.getElementById("popmodel9").style.display = "none";
}
function openmodel9() {
  document.getElementById("popmodel9").style.display = "flex";
}

function exitmodel10() {
  document.getElementById("popmodel10").style.display = "none";
}
function openmodel10() {
  document.getElementById("popmodel10").style.display = "flex";
}

function exitmodel11() {
  document.getElementById("popmodel11").style.display = "none";
}
function openmodel11() {
  document.getElementById("popmodel11").style.display = "flex";
}

function exitmodel12() {
  document.getElementById("popmodel12").style.display = "none";
}
function openmodel12() {
  document.getElementById("popmodel12").style.display = "flex";
}

function exitmodel13() {
  document.getElementById("popmodel13").style.display = "none";
}
function openmodel13() {
  document.getElementById("popmodel13").style.display = "flex";
}

function exitmodel14() {
  document.getElementById("popmodel14").style.display = "none";
}
function openmodel14() {
  document.getElementById("popmodel14").style.display = "flex";
}

function exitmodel15() {
  document.getElementById("popmodel15").style.display = "none";
}
function openmodel15() {
  document.getElementById("popmodel15").style.display = "flex";
}

function exitmodel16() {
  document.getElementById("popmodel16").style.display = "none";
}
function openmodel16() {
  document.getElementById("popmodel16").style.display = "flex";
}

function exitmodel17() {
  document.getElementById("popmodel17").style.display = "none";
}
function openmodel17() {
  document.getElementById("popmodel17").style.display = "flex";
}

function exitmodel18() {
  document.getElementById("popmodel18").style.display = "none";
}
function openmodel18() {
  document.getElementById("popmodel18").style.display = "flex";
}

function exitmodel19() {
  document.getElementById("popmodel19").style.display = "none";
}
function openmodel19() {
  document.getElementById("popmodel19").style.display = "flex";
}

function exitmodel20() {
  document.getElementById("popmodel20").style.display = "none";
}
function openmodel20() {
  document.getElementById("popmodel20").style.display = "flex";
}

function exitmodel21() {
  document.getElementById("popmodel21").style.display = "none";
}
function openmodel21() {
  document.getElementById("popmodel21").style.display = "flex";
}

function exitmodel22() {
  document.getElementById("popmodel22").style.display = "none";
}
function openmodel22() {
  document.getElementById("popmodel22").style.display = "flex";
}

function exitmodel23() {
  document.getElementById("popmodel23").style.display = "none";
}
function openmodel23() {
  document.getElementById("popmodel23").style.display = "flex";
}

function exitmodel24() {
  document.getElementById("popmodel24").style.display = "none";
}
function openmodel24() {
  document.getElementById("popmodel24").style.display = "flex";
}

function exitmodel25() {
  document.getElementById("popmodel25").style.display = "none";
}
function openmodel25() {
  document.getElementById("popmodel25").style.display = "flex";
}

function exitmodel26() {
  document.getElementById("popmodel26").style.display = "none";
}
function openmodel26() {
  document.getElementById("popmodel26").style.display = "flex";
}

function exitmodel27() {
  document.getElementById("popmodel27").style.display = "none";
}
function openmodel27() {
  document.getElementById("popmodel27").style.display = "flex";
}

// ENVIRONMENT

function exitenvironment1() {
  document.getElementById("popenvironment1").style.display = "none";
}
function openenvironment1() {
  document.getElementById("popenvironment1").style.display = "flex";
}

function exitenvironment2() {
  document.getElementById("popenvironment2").style.display = "none";
}
function openenvironment2() {
  document.getElementById("popenvironment2").style.display = "flex";
}

function exitenvironment3() {
  document.getElementById("popenvironment3").style.display = "none";
}
function openenvironment3() {
  document.getElementById("popenvironment3").style.display = "flex";
}

function exitenvironment4() {
  document.getElementById("popenvironment4").style.display = "none";
}
function openenvironment4() {
  document.getElementById("popenvironment4").style.display = "flex";
}

function exitenvironment5() {
  document.getElementById("popenvironment5").style.display = "none";
}
function openenvironment5() {
  document.getElementById("popenvironment5").style.display = "flex";
}

// COMMERICAL

function exitcommercial1() {
  document.getElementById("popcommercial1").style.display = "none";
}
function opencommercial1() {
  document.getElementById("popcommercial1").style.display = "flex";
}

function exitcommercial2() {
  document.getElementById("popcommercial2").style.display = "none";
}
function opencommercial2() {
  document.getElementById("popcommercial2").style.display = "flex";
}

function exitcommercial3() {
  document.getElementById("popcommercial3").style.display = "none";
}
function opencommercial3() {
  document.getElementById("popcommercial3").style.display = "flex";
}

function exitcommercial4() {
  document.getElementById("popcommercial4").style.display = "none";
}
function opencommercial4() {
  document.getElementById("popcommercial4").style.display = "flex";
}

function exitcommercial5() {
  document.getElementById("popcommercial5").style.display = "none";
}
function opencommercial5() {
  document.getElementById("popcommercial5").style.display = "flex";
}


function exitcommercial6() {
  document.getElementById("popcommercial6").style.display = "none";
}
function opencommercial6() {
  document.getElementById("popcommercial6").style.display = "flex";
}

function exitcommercial7() {
  document.getElementById("popcommercial7").style.display = "none";
}
function opencommercial7() {
  document.getElementById("popcommercial7").style.display = "flex";
}

function exitcommercial8() {
  document.getElementById("popcommercial8").style.display = "none";
}
function opencommercial8() {
  document.getElementById("popcommercial8").style.display = "flex";
}

function exitcommercial9() {
  document.getElementById("popcommercial9").style.display = "none";
}
function opencommercial9() {
  document.getElementById("popcommercial9").style.display = "flex";
}

function exitcommercial10() {
  document.getElementById("popcommercial10").style.display = "none";
}
function opencommercial10() {
  document.getElementById("popcommercial10").style.display = "flex";
}

// VISUAL

function exitvisual1() {
  document.getElementById("popvisual1").style.display = "none";
}
function openvisual1() {
  document.getElementById("popvisual1").style.display = "flex";
}

function exitvisual2() {
  document.getElementById("popvisual2").style.display = "none";
}
function openvisual2() {
  document.getElementById("popvisual2").style.display = "flex";
}

function exitvisual3() {
  document.getElementById("popvisual3").style.display = "none";
}
function openvisual3() {
  document.getElementById("popvisual3").style.display = "flex";
}

function exitvisual4() {
  document.getElementById("popvisual4").style.display = "none";
}
function openvisual4() {
  document.getElementById("popvisual4").style.display = "flex";
}

function exitvisual5() {
  document.getElementById("popvisual5").style.display = "none";
}
function openvisual5() {
  document.getElementById("popvisual5").style.display = "flex";
}

function exitvisual6() {
  document.getElementById("popvisual6").style.display = "none";
}
function openvisual6() {
  document.getElementById("popvisual6").style.display = "flex";
}

function exitvisual7() {
  document.getElementById("popvisual7").style.display = "none";
}
function openvisual7() {
  document.getElementById("popvisual7").style.display = "flex";
}

function exitvisual8() {
  document.getElementById("popvisual8").style.display = "none";
}
function openvisual8() {
  document.getElementById("popvisual8").style.display = "flex";
}

function exitvisual9() {
  document.getElementById("popvisual9").style.display = "none";
}
function openvisual9() {
  document.getElementById("popvisual9").style.display = "flex";
}

function exitvisual10() {
  document.getElementById("popvisual10").style.display = "none";
}
function openvisual10() {
  document.getElementById("popvisual10").style.display = "flex";
}

function exitvisual11() {
  document.getElementById("popvisual11").style.display = "none";
}
function openvisual11() {
  document.getElementById("popvisual11").style.display = "flex";
}

function exitvisual12() {
  document.getElementById("popvisual12").style.display = "none";
}
function openvisual12() {
  document.getElementById("popvisual12").style.display = "flex";
}

function exitvisual13() {
  document.getElementById("popvisual13").style.display = "none";
}
function openvisual13() {
  document.getElementById("popvisual13").style.display = "flex";
}

function exitvisual14() {
  document.getElementById("popvisual14").style.display = "none";
}
function openvisual14() {
  document.getElementById("popvisual14").style.display = "flex";
}

function exitvisual15() {
  document.getElementById("popvisual15").style.display = "none";
}
function openvisual15() {
  document.getElementById("popvisual15").style.display = "flex";
}

function exitvisual16() {
  document.getElementById("popvisual16").style.display = "none";
}
function openvisual16() {
  document.getElementById("popvisual16").style.display = "flex";
}

function exitvisual17() {
  document.getElementById("popvisual17").style.display = "none";
}
function openvisual17() {
  document.getElementById("popvisual17").style.display = "flex";
}

function exitvisual18() {
  document.getElementById("popvisual18").style.display = "none";
}
function openvisual18() {
  document.getElementById("popvisual18").style.display = "flex";
}

function exitvisual19() {
  document.getElementById("popvisual19").style.display = "none";
}
function openvisual19() {
  document.getElementById("popvisual19").style.display = "flex";
}

function exitvisual20() {
  document.getElementById("popvisual20").style.display = "none";
}
function openvisual20() {
  document.getElementById("popvisual20").style.display = "flex";
}

function exitvisual21() {
  document.getElementById("popvisual21").style.display = "none";
}
function openvisual21() {
  document.getElementById("popvisual21").style.display = "flex";
}

function exitvisual22() {
  document.getElementById("popvisual22").style.display = "none";
}
function openvisual22() {
  document.getElementById("popvisual22").style.display = "flex";
}

function exitvisual23() {
  document.getElementById("popvisual23").style.display = "none";
}
function openvisual23() {
  document.getElementById("popvisual23").style.display = "flex";
}

function exitvisual24() {
  document.getElementById("popvisual24").style.display = "none";
}
function openvisual24() {
  document.getElementById("popvisual24").style.display = "flex";
}

function exitvisual25() {
  document.getElementById("popvisual25").style.display = "none";
}
function openvisual25() {
  document.getElementById("popvisual25").style.display = "flex";
}

function exitvisual26() {
  document.getElementById("popvisual26").style.display = "none";
}
function openvisual26() {
  document.getElementById("popvisual26").style.display = "flex";
}

function exitvisual27() {
  document.getElementById("popvisual27").style.display = "none";
}
function openvisual27() {
  document.getElementById("popvisual27").style.display = "flex";
}


// STOP IFRAME VIDEO

// function stopVideo(){
// const videos = document.querySelectorAll('iframe');
// const close = document.querySelector('.close');

// close.addEventListener('click', () => {
//    videos.forEach(i => {
//       const source = i.src;
//       i.src = '';
//       i.src = source;
//    });
// });
// }

function closeVideo(){
  const videos = document.querySelectorAll('iframe');
  
  videos.forEach(i => {
        const source = i.src;
        i.src = '';
        i.src = source;
     });
}