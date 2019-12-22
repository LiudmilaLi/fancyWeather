'use strict';

window.addEventListener('load', () => {
  let myDate = new Date();
  let year = myDate.getYear();
  if (year < 1000) {
    year += 1900;
  }
  let day = myDate.getDay();
  let month = myDate.getMonth();
  let dayOfMonth = myDate.getDate();
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let daysOfWeekFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  let CurrentTime = new Date();
  let h = CurrentTime.getHours();
  let m = CurrentTime.getMinutes();

  if (h === 24) {
    h = 0;
  } else if (h > 12) {
    h -= 0;
  }
  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }

  let myTime = document.getElementById('date');
  myTime.textContent = daysOfWeek[day] + ' ' + dayOfMonth + ' ' + monthNames[month] + ' ' + h + ':' + m;
  myTime.innerHTML = daysOfWeek[day] + ' ' + dayOfMonth + ' ' + monthNames[month] + ' ' + h + ':' + m;
  let tom = document.querySelector('.forecastDayHeader1');
  tom.textContent = daysOfWeekFull[(day + 1) % 7];
  tom.innerHTML = daysOfWeekFull[(day + 1) % 7];
  let aftom = document.querySelector('.forecastDayHeader2');
  aftom.textContent = daysOfWeekFull[(day + 2) % 7];
  aftom.innerHTML = daysOfWeekFull[(day + 2) % 7];
  let aaftom = document.querySelector('.forecastDayHeader3');
  aaftom.textContent = daysOfWeekFull[(day + 3) % 7];
  aaftom.innerHTML = daysOfWeekFull[(day + 3) % 7];
});
