var wrapper = document.getElementById("content");

document.addEventListener("DOMContentLoaded", function() {
  init();
});

function init() {
 loadJSON(function(response) {
    var json = JSON.parse(response);
    var count = Object.keys(json.film).length;
    for(var i=0; i<count; i++){
      var img = document.createElement("img");
      img.src = json.films[i].url;
      img.setAttribute("class", "filmimage");
      wrapper.appendChild(img);
    }
 });
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'dist/json/data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
 }
