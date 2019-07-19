
var modal1 = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

var mdl1 = document.getElementById("mdl-1");
var mdl2 = document.getElementById("mdl-2");


var span = document.getElementsByClassName("close");


mdl1.onclick = function() {
    modal1.style.display = "block";
}

mdl2.onclick = function() {
    modal2.style.display = "block";
}
  /*
span.onclick = function() {
    modal1.style.display = "none";
}
*/
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 

for (var i = 0; i < span.length; i++) {
    var thisSpan = span[i];
    thisSpan.addEventListener("click", function() {
        modal1.style.display = "none";
        modal2.style.display = "none";
    }, false);
  }

  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("homeDefault").click();
