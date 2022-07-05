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