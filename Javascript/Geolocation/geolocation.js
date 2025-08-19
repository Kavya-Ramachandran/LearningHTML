function geolocator(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success,error);
    }
}
function success(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    let url=document.getElementById("mapurl")
    let empeded=`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`
    url.src=empeded
}

function error(error){
    switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
      default:
        alert("An unknown error");
        break;

}
}

// //latitude and longitude
// function geolocator(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(success,error);
//     }
// }
// function success(position){
//     const latitude=position.coords.latitude;
//     const longitude=position.coords.longitude;
//     console.log(`latitude:${latitude},longitude:${longitude}`);
// }

// function error(error){
//     switch(error.code) {
//     case error.PERMISSION_DENIED:
//       alert("User denied the request for Geolocation.");
//       break;
//     case error.POSITION_UNAVAILABLE:
//       alert("Location information is unavailable.");
//       break;
//     case error.TIMEOUT:
//       alert("The request to get user location timed out.");
//       break;
//       default:
//         alert("An unknown error");
//         break;

// }
// }