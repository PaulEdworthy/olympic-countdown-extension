const beijingDate = "February 4, 2022 08: 00: 00"
const parisDate = "July 26, 2024 02: 00: 00"
const milanoDate = "February 6, 2020 02: 00: 00"
const laDate = "July 21, 2028 11: 00: 00"
const oly2022 = "2022 Olympic Games in Beijing, China"
const oly2024 = "2024 Olympic Games in Paris, France"
const oly2026 = "2026 Olympic Games in Milano, Italy"
const oly2028 = "2028 Olympic Games in Los Angeles, USA"

const targetDate = new Date(beijingDate).getTime();
const eventDate = document.getElementById('event__date');
const timer = document.getElementById('timer');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// eventDate.textContent = ;

let interval = setInterval(function () {
  let now = new Date().getTime();

  let timeRemaining = targetDate - now;

  let daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  days.textContent = daysRemaining;
  hours.textContent = hoursRemaining;
  minutes.textContent = minutesRemaining;
  seconds.textContent = secondsRemaining;
});