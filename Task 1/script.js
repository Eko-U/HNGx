'use strict';

const slackName = document.querySelector('.slack-profile-name');
const currentDay = document.querySelector('.current-date');
const currentUTCTime = document.querySelector('.current-time');
const hngTrack = document.querySelector('.hng-track');
const curDayIndex = new Date().getUTCDay();

const githubLink = document.querySelector('.github-url');

const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

slackName.setAttribute('data-testid', slackName.textContent);

currentDay.textContent = week[curDayIndex];
currentDay.setAttribute('data-testid', currentDay.textContent);

currentUTCTime.textContent = Date.now();
currentUTCTime.setAttribute('data-testid', currentUTCTime.textContent);
console.log(currentUTCTime);

hngTrack.setAttribute('data-testid', hngTrack.textContent);

githubLink.setAttribute('data-testid', githubLink.href);
