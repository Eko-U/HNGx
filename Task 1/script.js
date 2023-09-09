'use strict';

const currentDay = document.querySelector('.current-date');
const currentUTCTime = document.querySelector('.current-time');
const curDayIndex = new Date().getUTCDay();

const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

currentDay.textContent = week[curDayIndex];

setInterval(() => (currentUTCTime.textContent = Date.now()), 1000);
