// document.body.setAttribute("class", "noscroll");

// document.getElementById("overlay").style.display = "block";
// document.getElementById("spinner").style.display = "block";

// window.onload = function () {
//   window.setTimeout(function () {
//     document.getElementById("spinner").style.display = "none";
//     document.getElementById("overlay").style.display = "none";

//     document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
//   }, 2000);

// }
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
    document.body.setAttribute("class", "noscroll");

    document.getElementById("overlay").style.display = "block";
    document.getElementById("spinner").style.display = "block";
    
  } else if (state == 'complete') {
      setTimeout(function(){
        document.getElementById("spinner").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    
        document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
      },1000);
  }
}