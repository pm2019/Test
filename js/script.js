var image = document.getElementById("image");

document.addEventListener("DOMContentLoaded", function() {
  init();
});

function init() {
 loadJSON(function(response) {
    var json = JSON.parse(response);
    console.log(json);
    /* Comment - by using the above console log and checking the data in the array I noticed film should be films  */
    var count = Object.keys(json.films).length;

    /*for(var i=0; i<count; i++){
      var img = document.createElement("img");
      img.src = json.films[i].url;

      var title = document.createElement("title");
      title = json.films[i].title;

      var description = document.createElement("description");
      description = json.films[i].description;
    }*/

    var json_slider = $('<ul id="slider">');
    $.each(json.films, function(key, val) {
      json_slider.append('<li><img src="' + val.url + '"/><p class="title">' + val.title + '</p><p class="description">' + val.description + '</p></li>');
      $("#content").append(json_slider);
    });

    $('header h1').append(json.introduction.page_title);  
    $('header h3').append(json.introduction.page_description);  


  var slideCount = $('#slider li').length;
  var slideWidth = $('#slider li').width();
  var slideHeight = $('#slider li').height();
  var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });
    $('#slider').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider li:last-child').prependTo('#slider');

     function moveLeft() {
        $('#slider').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider li:last-child').prependTo('#slider');
            $('#slider').css('left', '');
        });
    };

    function moveRight() {
        $('#slider').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider li:first-child').appendTo('#slider');
            $('#slider').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

 });
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../dist/json/data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
 }

  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
 