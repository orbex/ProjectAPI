var testObject = {//a test groupon oject that will be how all the api needs to follow
  pos: {
          "lat": 39.01214,
          "lng": - 94.39042},
  content: {
    description: "For your weirdos",
    adTitle:"Lions for your militarty",
    shortTitle: "We got Weird Shit",
    image: ""
  },
  price: {
    regular: "One MILLLION DOLLARS",
    discount: "5000%",
    newPrice: "You First Born"
  },
  contact: {
    websiteUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    dealUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }

  }
var markersArray = [];




//places a marker
  function placeMarker(object){
    var infoWindow = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' +object.content.shortTitle+'</h1>'+
            '<div id="bodyContent">'+
            '<p><b>The Deal: </b> '+ object.content.adTitle+'</p>' +
          //  '<p><b>The Fine Print: </b>'+ object.content.finePrint + '</p>' +
          //  '<p><b>Price: </b><s>'+ object.price.regular + '</s> '+object.price.newPrice + ' '+ "<b> A Discount of "+object.price.discount+ '</p>' +
            '<p><b>URL: </b><a href="'+ object.contact.websiteUrl+'">'+ 'Company URL</a> <a href="'+object.contact.dealUrl +'"> Deal URL</a></p>'+
            '</div>'+
            '</div>';

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(object.loc.lat, object.loc.lng),
      map: map
    });
    //Creates the content window to be filled in by the object
    var infowindow = new google.maps.InfoWindow({
      content: infoWindow
    });
    marker.addListener('click', function() { //this opens the info window on click
    infowindow.open(map,marker);


    });
  }
  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markersArray.length; i++) {
      placeMarker(dealReturn[i]);
      console.log(dealReturn[i]);
    }
  }
  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }


  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    markersArray = [];
  }


  function checkArray(){
    for (var i = 0; i < markersArray.length; i++) {
      console.log(markersArray[i])
    }
  }
