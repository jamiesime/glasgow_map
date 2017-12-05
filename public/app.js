var initialise = function(){
  var center = {lat: 55.856998, lng:-4.244088};
  var coolSpot = {lat: 55.844853, lng:-4.245821};
  var jakarta = {lat: -6.051, lng: 106.8650};
  var container = document.getElementById('main-map');
  var mainMap = new MapWrapper(container, center, 10);
  mainMap.addMarker(center, "a great spot");
  mainMap.addMarker(coolSpot, "so many memories here");
  mainMap.addClickEvent();

  var bounceButton = document.getElementById('bounce-button');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
  var jakartaButton = document.getElementById('jakarta-go');
  jakartaButton.addEventListener('click', function(){
    mainMap.recenterMap(jakarta);
  });
  var glasgowButton = document.getElementById('glasgow-go');
  glasgowButton.addEventListener('click', function(){
    mainMap.recenterMap(center);
  });

  var whereamiButton = document.getElementById('whereami');
  whereamiButton.addEventListener('click', function(){
    mainMap.goToGeolocation(mainMap);
  });
}


window.addEventListener('load', initialise);
