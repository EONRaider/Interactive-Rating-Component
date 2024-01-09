/* eslint-disable no-undef */

function ResultsComponent() {
  this.scoreElement = document.querySelector('.results__score');
}

ResultsComponent.prototype = {
  get currentRating() {
    return localStorage.getItem('currentRating');
  },
  get totalScore() {
    return localStorage.getItem('totalScore');
  },
};

ResultsComponent.prototype.renderResults = function renderResults() {
  if ((this.currentRating !== 'null') && (this.totalScore !== 'null')) {
    this.scoreElement.innerHTML = `You selected ${this.currentRating} out of ${this.totalScore}`;
  } else {
    this.scoreElement.innerHTML = 'You selected no ratings yet!';
  }
};

new ResultsComponent().renderResults();
