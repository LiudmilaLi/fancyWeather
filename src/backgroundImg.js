'use strict';

function searchCity() {
  const city = document.getElementsByClassName('.search').value;
  const url = 'https://api.unsplash.com/photos/random/?location=city,season&per_page&query=weather&client_id=32dc78bd3f82d2d616898689c48b70952a33c42e87de629765d3e2d39240f73d';

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      document.body.style.background = 'url(' + data.urls.regular + city + ')';
      document.body.style.backgroundSize = 'cover';
    });
}
searchCity();
