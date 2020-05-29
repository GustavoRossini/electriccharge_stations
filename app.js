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

    data.forEach(function findCloseStation(allStations){

        let closeStations = [];
        
      
        if (allStations.Station_lat.toFixed(2) === latitude.toFixed(2) && allStations.Station_lng.toFixed(2) === longitude.toFixed(2)) {
            closeStations.push(allStations);

            console.log(closeStations);
            
        } 

        //const closeStations = new Set(closeStationsRaw);
        
    
            closeStations.forEach(function(objects) {

              //console.log(closestation);
              let body = document.querySelector("body");
              let name_paragraph = document.createElement("p");
              name_paragraph.innerText= `Station ${objects.Station_name}`;
              let address_paragraph = document.createElement("p");
              address_paragraph.innerText= `Location: ${objects.Station_address}`;
              body.appendChild(name_paragraph);
              body.appendChild(address_paragraph);
            
            });
            
          })

    });



}

  function onError(error) {
    console.error('No no no ', error);
   
}