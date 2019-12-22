'use strict';

ymaps.ready(init);
function init() {
  let geolocation = ymaps.geolocation;
  let myMap = new ymaps.Map('map', {
    center: [53.94, 27.59],
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  });

  geolocation.get({
    provider: 'yandex',
    mapStateAutoApply: true
  })
    .then(function (result) {
      result.geoObjects.options.set('preset', 'islands#redCircleIcon');
      result.geoObjects.get(0).properties.set({
        balloonContentBody: 'Мое местоположение'
      });
      myMap.geoObjects.add(result.geoObjects);
    });

  geolocation.get({
    provider: 'browser',
    mapStateAutoApply: true
  })
    .then(function (result) {
      result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
      myMap.geoObjects.add(result.geoObjects);
    });
}
