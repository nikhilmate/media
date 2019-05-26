window.onload = function () {
  document.body.setAttribute("class", "noscroll");

  document.getElementById("overlay").style.display = "block";
  document.getElementById("spinner").style.display = "block";

  window.setTimeout(function () {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
  }, 2000);

}