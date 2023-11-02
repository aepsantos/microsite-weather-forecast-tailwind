import week from "./src/js/diasDaSemana.js";
window.onload = getMyLocation;


function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("Ops, no geolocation support");
  }
}

function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log(position.coords);
  const buscaApiWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`;
  const buscaApiLocalidade = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

  fetch(buscaApiLocalidade)
    .then(resposta => resposta.json())
    .then(data => {
      console.log(data)
      console.log(data.address.city)
      let city = document.getElementsByClassName("localidade")
      city[0].innerHTML = data.address.city
      
    })

  fetch(buscaApiWeather)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let tempUni = data.daily_units.temperature_2m_max;
      let today = document.getElementsByClassName("today")
      let dataAnoMesDia = data.daily.time[0];
      let dataSeparada = dataAnoMesDia.split("-");
      let ano = dataSeparada[0];
      let mes = dataSeparada[1];
      let dia = dataSeparada[2];
      today[0].innerHTML = `${dia}${"/"}${mes}${"/"}${ano}`;
      let tempCurrent = document.getElementsByClassName("temperatura_atual")
      tempCurrent[0].innerHTML = data.current_weather.temperature + `${tempUni}`;
      let indiceMaxTemp = document.getElementsByClassName("temp_max");
      let maxTemp = data.daily.temperature_2m_max;
      let indiceMinTemp = document.getElementsByClassName("temp_min");
      let minTemp = data.daily.temperature_2m_min;
      week(indiceMaxTemp, maxTemp, indiceMinTemp, minTemp, tempUni);
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  mousewheel: {
    invert: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});




















