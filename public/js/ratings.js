/* eslint-disable no-undef */

function Button(buttonClass, value = null) {
  this.buttonClass = buttonClass;
  this.value = value;
}

Button.prototype = {
  get element() {
    return document.querySelector(this.buttonClass);
  },
};

function RatingsComponent() {
  this.ratingButtons = [];
  this.activeRatingButton = undefined;
  this.currentRating = null;
  this.clearRatingState();
}

RatingsComponent.prototype = {
  get totalScore() {
    return this.ratingButtons.length;
  },
};

RatingsComponent.prototype.addRatingButton = function addRatingButton(button) {
  this.ratingButtons.push(button);
  button.element.addEventListener('click', () => this.setCurrentRating(button));
  return this;
};

RatingsComponent.prototype.addRatingButtons = function addRatingButtons(buttonsIterable) {
  buttonsIterable.forEach((button) => this.addRatingButton(button));
  return this;
};

RatingsComponent.prototype.addSubmitButton = function addSubmitButton(button) {
  button.element.addEventListener('click', () => {
    this.saveRatingState();
    window.location.href = 'thank-you.html';
  });
  return this;
};

RatingsComponent.prototype.toggleActiveRatingButton = function toggleActiveRatingButton() {
  this.activeRatingButton.element.classList.toggle('active-rating');
};

RatingsComponent.prototype.saveRatingState = function saveRatingState() {
  localStorage.setItem('currentRating', this.currentRating.toString());
  localStorage.setItem('totalScore', this.totalScore.toString());
};

RatingsComponent.prototype.setCurrentRating = function setCurrentRating(button) {
  if (this.activeRatingButton) {
    // Un-toggle the rating button that's currently active, if any
    this.toggleActiveRatingButton();
  }
  this.activeRatingButton = button;
  this.currentRating = button.value;
  this.toggleActiveRatingButton();
};

RatingsComponent.prototype.clearRatingState = function clearRatingState() {
  localStorage.setItem('currentRating', null);
  localStorage.setItem('totalScore', null);
};

const ratingButtons = new Set(
  [
    new Button('.rating-1', 1),
    new Button('.rating-2', 2),
    new Button('.rating-3', 3),
    new Button('.rating-4', 4),
    new Button('.rating-5', 5),
  ],
);
const submitButton = new Button('.component__btn-submit');

new RatingsComponent()
  .addRatingButtons(ratingButtons)
  .addSubmitButton(submitButton);
