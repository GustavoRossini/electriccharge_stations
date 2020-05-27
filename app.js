let latitude;
let longitude;


getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
}

function onSuccess(position) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;


const electricCarChargersApi =  fetch ('https://api.bsmsa.eu/ext/api/bsm/chargepoints/chargepoints_states');

electricCarChargersApi.then(response => response.json())

.then(function analyse(data) {

    data.forEach(function findCloseStation(stationArray){

        closeStations = [];
      
        if (stationArray.Station_lat.toFixed(2) === latitude.toFixed(2) && stationArray.Station_lng.toFixed(2) === longitude.toFixed(2)) {
            closeStations.push(stationArray);
            //console.log(closeStations);
        } 
            closeStations.forEach(function(properties) {
              //console.log(closestation);
              let body = document.querySelector("body");
              let name_paragraph = document.createElement("p");
              name_paragraph.innerText= `Station ${properties.Station_name}`;
              let address_paragraph = document.createElement("p");
              address_paragraph.innerText= `Location: ${properties.Station_address}`;
              let address_paragraph = document.createElement("p");
              body.appendChild(name_paragraph);
              body.appendChild(address_paragraph);
            
            });
            
          })
        //else console.log("error");

    });



}

  function onError(error) {
    console.error('No no no ', error);
   
}