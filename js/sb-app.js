/* 
  Created for StingrayBranding
  Author: Jerry Hirsch @JD_Hirsch
  Email: jerry@stingraybranding.com
  Created: 20180212
  Github: https://github.com/stingraybranding/RealMap.git
*/

$(() => {
  
  let sbMap = {};

  // Initialize map options
  sbMap.zoom;
  sbMap.latlng = new google.maps.LatLng(38.907815, -77.042728);
  sbMap.mapOptions = {
    zoom: 6,
    center: sbMap.latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // Create map
  sbMap.map = new google.maps.Map(document.getElementById('map'), sbMap.mapOptions);

  return sbMap;
});