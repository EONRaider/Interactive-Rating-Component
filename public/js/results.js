/* eslint-disable no-undef */

const currentRating = localStorage.getItem('currentRating');
const totalScore = localStorage.getItem('totalScore');

if ((currentRating !== 'null') && (totalScore !== 'null')) {
  document.querySelector('.results__score').innerHTML = `You selected ${currentRating} out of ${totalScore}`;
} else {
  document.querySelector('.results__score').innerHTML = 'You selected no ratings yet!';
}
