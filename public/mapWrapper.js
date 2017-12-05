var MapWrapper = function(container, coords, zoom){
  var container = document.getElementById('main-map');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: 10
  });
  this.markers = [];
}


var currentInfoWindow;

MapWrapper.prototype.addMarker = function(coords, info){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    contentString: info
  });
  var infowindow = new google.maps.InfoWindow({
    content: marker.contentString
  });
  marker.addListener('click', function(){
    infowindow.open(marker.map, marker);
    if (currentInfoWindow != null) { currentInfoWindow.close(); }
    currentInfoWindow = infowindow;
  });
  this.markers.push(marker);
}


MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    var newMarkerCoords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
    this.addMarker(newMarkerCoords);
  }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function(){
  console.log("bounce attempted");
  var check =  this.markers;
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
}
