'use strict';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const header = document.createElement('section');
header.className = 'header';
wrapper.appendChild(header);

const buttonLeft = document.createElement('div');
buttonLeft.className = 'buttonLeft';
header.appendChild(buttonLeft);

const buttonRight = document.createElement('div');
buttonRight.className = 'buttonRight';
header.appendChild(buttonRight);

const buttonRefresh = document.createElement('button');
buttonRefresh.className = 'btn-refresh';
buttonLeft.appendChild(buttonRefresh);

const buttonLanguage = document.createElement('select');
buttonLanguage.className = 'btn-lang';
buttonLeft.appendChild(buttonLanguage);

const languageEn = document.createElement('option');
languageEn.className = 'languageEn';
buttonLanguage.appendChild(languageEn);
languageEn.textContent = 'En';

const languageBe = document.createElement('option');
languageBe.className = 'languageBe';
buttonLanguage.appendChild(languageBe);
languageBe.textContent = 'Be';

const languageRu = document.createElement('option');
languageRu.className = 'languageRu';
buttonLanguage.appendChild(languageRu);
languageRu.textContent = 'Ru';

const buttonDeg = document.createElement('div');
buttonDeg.className = 'btn-dg';
buttonLeft.appendChild(buttonDeg);

const buttonCel = document.createElement('button');
buttonCel.className = 'btn-dgc';
buttonDeg.appendChild(buttonCel);
buttonCel.textContent = '\u00B0C';

const buttonFar = document.createElement('button');
buttonFar.className = 'btn-dgf';
buttonDeg.appendChild(buttonFar);
buttonFar.textContent = '\u00B0F';

const form = document.createElement('form');
form.className = 'form';
buttonRight.appendChild(form);

const input = document.createElement('input');
input.className = 'search';
form.appendChild(input);
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Search city');

const button = document.createElement('button');
button.className = 'btn-load';
form.appendChild(button);
button.setAttribute('type', 'submit');
button.setAttribute('onclick', 'searchCity()');
button.textContent = 'Search';

const main = document.createElement('main');
main.className = 'main';
wrapper.appendChild(main);

const wheather = document.createElement('section');
wheather.className = 'wheather';
main.appendChild(wheather);

const mapdata = document.createElement('div');
mapdata.className = 'mapdata';
main.appendChild(mapdata);

const map = document.createElement('div');
map.id = 'map';
mapdata.appendChild(map);

const lat = document.createElement('p');
lat.className = 'latitude';
mapdata.appendChild(lat);
lat.textContent = 'Latitude: ';

const latData = document.createElement('span');
latData.className = 'latitudeDat';
lat.append(latData);
latData.textContent = '53.89';

const long = document.createElement('p');
long.className = 'longitude';
mapdata.appendChild(long);
long.textContent = 'Longitude: ';

const longData = document.createElement('span');
longData.className = 'longitudeDat';
long.append(longData);
longData.textContent = '27.56';

const loc = document.createElement('h1');
loc.className = 'location';
wheather.appendChild(loc);
loc.textContent = 'Location';

const date = document.createElement('div');
date.id = 'date';
wheather.appendChild(date);
date.textContent = 'Date-Time';

const wheatherData = document.createElement('div');
wheatherData.className = 'wheatherData';
wheather.appendChild(wheatherData);

const currentWeather = document.createElement('div');
currentWeather.className = 'currentWeather';
wheatherData.appendChild(currentWeather);

const tempDegree = document.createElement('div');
tempDegree.className = 'temperatureCont';
currentWeather.appendChild(tempDegree);

const temp = document.createElement('h3');
temp.className = 'temperature';
tempDegree.appendChild(temp);
temp.textContent = '25';

const degree = document.createElement('span');
degree.className = 'degree';
tempDegree.appendChild(degree);
degree.textContent = ' \u00B0C';

const currentWeatherItem = document.createElement('div');
currentWeatherItem.className = 'currentWeatherItem';
currentWeather.appendChild(currentWeatherItem);

const icon = document.createElement('canvas');
icon.id = 'icon';
currentWeatherItem.appendChild(icon);

const summary = document.createElement('p');
summary.className = 'summary';
currentWeatherItem.appendChild(summary);
summary.textContent = 'Summary';

const feelsLikeCont = document.createElement('div');
feelsLikeCont.className = 'feelsLikeCont';
currentWeatherItem.appendChild(feelsLikeCont);

const feelsLike = document.createElement('p');
feelsLike.className = 'feelsLike';
feelsLikeCont.appendChild(feelsLike);
feelsLike.textContent = 'Feels like: ';

const feelsLikeData = document.createElement('span');
feelsLikeData.className = 'feelsLikeData';
feelsLikeCont.appendChild(feelsLikeData);
feelsLikeData.textContent = '5\u00B0C';

const windCont = document.createElement('div');
windCont.className = 'windCont';
currentWeatherItem.appendChild(windCont);

const wind = document.createElement('p');
wind.className = 'wind';
windCont.appendChild(wind);
wind.textContent = 'Wind: ';

const windData = document.createElement('span');
windData.className = 'windData';
windCont.appendChild(windData);
windData.textContent = '1m/s';

const humidityCont = document.createElement('div');
humidityCont.className = 'humidityCont';
currentWeatherItem.appendChild(humidityCont);

const humidity = document.createElement('p');
humidity.className = 'humidity';
humidityCont.appendChild(humidity);
humidity.textContent = 'Humidity: ';

const humidityData = document.createElement('span');
humidityData.className = 'humidityData';
humidityCont.appendChild(humidityData);
humidityData.textContent = '80%';

const forecast = document.createElement('div');
forecast.className = 'forecast';
wheatherData.appendChild(forecast);

const forecastFirst = document.createElement('div');
forecastFirst.className = 'forecastDay';
forecast.appendChild(forecastFirst);

const tomorrow = document.createElement('p');
tomorrow.className = 'forecastDayHeader1';
forecastFirst.appendChild(tomorrow);
tomorrow.textContent = 'Day1';

const forecastTempDegree1 = document.createElement('div');
forecastTempDegree1.className = 'forecastTempDegree';
forecastFirst.appendChild(forecastTempDegree1);

const forecastTemp1 = document.createElement('h4');
forecastTemp1.className = 'forecastTemp1';
forecastTempDegree1.appendChild(forecastTemp1);
forecastTemp1.textContent = '25';

const forecastDegree1 = document.createElement('span');
forecastDegree1.className = 'forecastDegree';
forecastTempDegree1.appendChild(forecastDegree1);
forecastDegree1.textContent = ' \u00B0C';

const forecastIcon1 = document.createElement('canvas');
forecastIcon1.id = 'forecastIcon1';
forecastTempDegree1.appendChild(forecastIcon1);

const forecastSecond = document.createElement('div');
forecastSecond.className = 'forecastDay';
forecast.appendChild(forecastSecond);

const afterTomorrow = document.createElement('p');
afterTomorrow.className = 'forecastDayHeader2';
forecastSecond.appendChild(afterTomorrow);
afterTomorrow.textContent = 'Day2';

const forecastTempDegree2 = document.createElement('div');
forecastTempDegree2.className = 'forecastTempDegree';
forecastSecond.appendChild(forecastTempDegree2);

const forecastTemp2 = document.createElement('h4');
forecastTemp2.className = 'forecastTemp2';
forecastTempDegree2.appendChild(forecastTemp2);
forecastTemp2.textContent = '25';

const forecastDegree2 = document.createElement('span');
forecastDegree2.className = 'forecastDegree';
forecastTempDegree2.appendChild(forecastDegree2);
forecastDegree2.textContent = ' \u00B0C';

const forecastIcon2 = document.createElement('canvas');
forecastIcon2.id = 'forecastIcon2';
forecastTempDegree2.appendChild(forecastIcon2);

const forecastThird = document.createElement('div');
forecastThird.className = 'forecastDay';
forecast.appendChild(forecastThird);

const afterAfTomorrow = document.createElement('p');
afterAfTomorrow.className = 'forecastDayHeader3';
forecastThird.appendChild(afterAfTomorrow);
afterAfTomorrow.textContent = 'Day3';

const forecastTempDegree3 = document.createElement('div');
forecastTempDegree3.className = 'forecastTempDegree';
forecastThird.appendChild(forecastTempDegree3);

const forecastTemp3 = document.createElement('h4');
forecastTemp3.className = 'forecastTemp3';
forecastTempDegree3.appendChild(forecastTemp3);
forecastTemp3.textContent = '25';

const forecastDegree3 = document.createElement('span');
forecastDegree3.className = 'forecastDegree';
forecastTempDegree3.appendChild(forecastDegree3);
forecastDegree3.textContent = ' \u00B0C';

const forecastIcon3 = document.createElement('canvas');
forecastIcon3.id = 'forecastIcon3';
forecastTempDegree3.appendChild(forecastIcon3);
