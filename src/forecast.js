'use strict';

window.addEventListener('load', () => {
  let forecastTemp1 = document.querySelector('.forecastTemp1');
  let cond1 = document.querySelector('#forecastIcon1');
  let forecastTemp2 = document.querySelector('.forecastTemp2');
  let cond2 = document.querySelector('#forecastIcon2');
  let forecastTemp3 = document.querySelector('.forecastTemp3');
  let cond3 = document.querySelector('#forecastIcon3');
  let lat;
  let long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/e9216d66e3a3a9a6f8733acc28293c04/${lat},${long}?units=auto`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          forecastTemp1.textContent = Math.ceil(data.daily.data[1].temperatureHigh);
          cond1.textContent = data.daily.data[1].summary;
          setIcons(data.daily.data[1].icon, document.querySelector('#forecastIcon1'));

          forecastTemp2.textContent = Math.ceil(data.daily.data[2].temperatureHigh);
          cond2.textContent = data.daily.data[2].summary;
          setIcons(data.daily.data[2].icon, document.querySelector('#forecastIcon2'));

          forecastTemp3.textContent = Math.ceil(data.daily.data[3].temperatureHigh);
          cond3.textContent = data.daily.data[3].summary;
          setIcons(data.daily.data[3].icon, document.querySelector('#forecastIcon3'));
        });
    });
  }
  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: 'white' });
    const currentIcon = icon.replace(/-/g, '_').toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
