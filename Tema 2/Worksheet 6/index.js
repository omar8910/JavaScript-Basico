// window.addEventListener("scroll", scrollInfinito);

// function scrollInfinito(){
//     let heigthScroll = document.documentElement.scrollHeight;
//     let topScroll = document.documentElement.scrollTop;
//     let clienteHeigth = document.documentElement.clientHeight;

//     if((topScroll + clienteHeigth)>(heigthScroll-10))
//     document.getElementById("etiqueta").innerHTML+="Infinity<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
// }



// Objeto para obtener la localización:

function obtengoPosicion(coordenadas){
    let latitud = coordenadas.coords.latitude;
    let longitud = coordenadas.coords.longitude;
    var map = L.map('map').setView([latitud, longitud], 20);
    var marker = L.marker([latitud, longitud]).addTo(map);
    marker.bindPopup("<b>!Estoy aqui!</b><br>").openPopup();
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
}

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtengoPosicion);

    // watchPosition lo que hace es que salte tu posición cada vez que varíe.
    // navigator.geolocation.watchPosition(obtengoPosicion);
}
else{
    console.log("Geolocalización no soportada");
}


function getDistanciaMetros(lat1,lon1,lat2,lon2)
{
  rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000; 
  return d ; 
}
console.log(getDistanciaMetros(37.1922941,-3.6174736,37.192192,-3.621068));