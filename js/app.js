$(document).ready(function() {

  // Declare temperature variables
  var tempK;
  var tempC;
  var tempF;
  var area;
  var weatherStatus = [];


  // Get user location data using an IP info service (not 100% accurate by any means)
    $.ajax({
      url: "http://ipinfo.io",
      type: "GET",
      dataType: "jsonp"
    })
    .fail(function() {
      alert("Sorry, something was wrong with your request. Please try again later.");
    })
    .then(function(response) {
      return $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + response.city + "&APPID=1f8c6860da7d1a87aecddcfe0e1dcbbc",
        type: "GET"
      });
    })
    .fail(function(){
      alert("Sorry, something was wrong with your request. Please try again later.");
    })
    .done(function(json) {
      tempK = json.main.temp;
      weatherStatus = [json.weather[0].id, json.weather[0].main];
      area = json.name;
      // Default data display on load
      tempC = Math.floor(tempK - 273.15);
      $(".weather-data").html("<ul class='weather-list'><li>" + area + "</li><li>" + tempC + " °C, " + weatherStatus[1] + "</li></ul>");

      displayWeather();
    });

  // Change display based on weather condition
  function displayWeather() {
    switch (true) {

    // Thunderstorm
    case weatherStatus[0] >= 200 && weatherStatus[0] <= 232:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/29550/pexels-photo-29550.jpg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/182/182261.svg'></object>");
    break;

    // Drizzle
    case weatherStatus[0] >= 300 && weatherStatus[0] <= 321:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/48678/pexels-photo-48678.jpeg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/131/131041.svg'></object>");
    break;

    // Rain
    case weatherStatus[0] >= 500 && weatherStatus[0] <= 531:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/131/131041.svg'></object>");
    break;

    // Snow
    case weatherStatus[0] >= 600 && weatherStatus[0] <= 622:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/24475/pexels-photo-24475.jpg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/152/152008.svg'></object>");
    break;

    // Atmosphere
    case weatherStatus[0] >= 701 && weatherStatus[0] <= 781:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/92990/pexels-photo-92990.jpeg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/132/132341.svg'></object>");
    break;

    // Clouds
    case weatherStatus[0] >= 801 && weatherStatus[0] <= 804:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/149/149209.svg'></object>");
    break;

    // Extreme
    case weatherStatus[0] >= 900 && weatherStatus[0] <= 906:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/29191/pexels-photo-29191.jpg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/134/134119.svg'></object>");
    break;

    // Additional
    case weatherStatus[0] >= 951 && weatherStatus[0] <= 962:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/26265/pexels-photo-26265.jpg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/134/134119.svg'></object>");
    break;

    // Clear
    default:
      $(".weather-wrapper").css("background", "linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)), url('https://images.pexels.com/photos/29191/pexels-photo-29191.jpg?w=1400&h=900&auto=compress&cs=tinysrgb') center center no-repeat");
      $(".icon-wrapper").html("<object id='weather-embed' class='weather-show' type='image/svg+xml' data='http://image.flaticon.com/icons/svg/118/118755.svg'></object>");
    break;
    }
  }

  // Convert temperature units depending on button click
  function dataConversion() {
    $(".btn-celsius").on("click", function(){
      tempC = Math.floor(tempK - 273.15);
      $(".weather-data").html("<ul class='weather-list'><li>" + area + "</li><li>" + tempC + " °C, " + weatherStatus[1] + "</li></ul>");
    });

    $(".btn-fahrenheit").on("click", function(){
      tempF = Math.floor(tempK * 9/5 - 459.67);
      $(".weather-data").html("<ul class='weather-list'><li>" + area + "</li><li>" + tempF + " °F, " + weatherStatus[1] + "</li></ul>");
    });
  }

  dataConversion();

  // Change SVG (weather icons) color
  // Get the Object by ID
  var aSvg = document.getElementById("weather-embed");
  // Get the SVG document inside the Object tag
  var svgDoc = a.contentDocument;
  // Get one of the SVG items by ID;
  var svgItem = svgDoc.getElementById("svgItem");
  // Set the colour to something else
  aSvg.setAttribute("fill", "#eee");

});
