'use strict';

window.addEventListener('load', () => {
  let long;
  let lat;
  let temp = document.querySelector('.temperature');
  let loc = document.querySelector('.location');
  let condition = document.querySelector('.summary');
  let humid = document.querySelector('.humidityData');
  let feels = document.querySelector('.feelsLikeData');
  let winds = document.querySelector('.windData');
  let long1 = document.querySelector('.longitudeDat');
  let lat1 = document.querySelector('.latitudeDat');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/e9216d66e3a3a9a6f8733acc28293c04/${lat},${long}`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const {
            temperature, summary, humidity, apparentTemperature, windSpeed, icon
          } = data.currently;
          temp.textContent = Math.ceil((temperature - 32) * (5 / 9));
          condition.textContent = summary;
          loc.textContent = data.timezone;
          humid.textContent = humidity * 100 + '%';
          feels.textContent = Math.ceil((apparentTemperature - 32) * (5 / 9)) + '\u00B0C';
          winds.textContent = Math.ceil(windSpeed / 3.6) + 'm/s';
          long1.textContent = Math.floor(data.longitude) + '\u00B0' + Math.ceil((data.longitude - Math.floor(data.longitude)) * 100) + '\u2032';
          lat1.textContent = Math.floor(data.latitude) + '\u00B0' + Math.ceil((data.latitude - Math.floor(data.latitude)) * 100) + '\u2032';
          setIcons(icon, document.querySelector('#icon'));
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
