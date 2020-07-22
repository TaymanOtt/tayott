window.onscroll = function() {myFunction()};
var navi = document.getElementById("navi");
var sticky = navi.offSetTop;
function.myFunction(){
  if (windowPageYOffset >= sticky){
    navi.classList.add(sticky);
  }else {
    navi.classList.remove(sticky);
  }
}
