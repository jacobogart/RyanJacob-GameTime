import $ from 'jquery';

const domUpdates = {
  updateNames: function(name1, name2) {
    $(".player1-name > h4").text(name1);
    $(".player2-name > h4").text(name2);
  },
  
  revealGame: function() {
    this.toggleNameInputContainer(false);
    this.toggleGameArea(true);
  },

  hideGame: function() {
    this.toggleGameArea(false);
    this.toggleNameInputs(false);
    this.toggleMultiplierInputs(true);
    this.toggleNameInputContainer(true);
  },

  toggleNameInputContainer: function(showThis) {
    $(".name-input-container").toggle(showThis);
  },

  toggleNameInputs: function(showThis) {
    $(".name-inputs").toggle(showThis);
  },

  toggleGameArea: function(showThis) {
    $(".game-area").toggle(showThis);
  },

  toggleMultiplierInputs: function(showThis) {
    $(".multiplier-inputs").toggle(showThis);
  },

  populateSurvery: function(round) {
    $(".survey").text(round.survey.question);
  },

  populateAnswers: function(round) {
    round.answers.forEach((answer, i) => {
      $(`.answer${i}`).text(answer.answer);
      $(`.answer${i}`).addClass("hidden");
      $(`.answer${i}-num`).text(answer.respondents);
      $(`.answer${i}-num`).addClass("hidden");
    });
  },

  revealCorrectAnswer: function(correctAnswer) {
    $(".answer").each(function() {
      if ($(this).text() === correctAnswer.answer) {
        $(this).removeClass("hidden");
        $(this).parent().next().children().removeClass("hidden");
      }
    });
  },

  updateScore: function(player, score) {
    player === 1 ? $(".sb-one > h6").text(score) : $(".sb-two > h6").text(score);
  },

  toggleActivePlayer: function(player1Turn) {
    this.addSwordTurnIndicator(player1Turn);
    this.removeOppositeSword(player1Turn);
  },

  addSwordTurnIndicator: function(player1Turn) {
    let playerBox = player1Turn ? $(".pb-one") : $(".pb-two");
    let swordSide = player1Turn ? "left" : "right";
    playerBox.prepend(`<img class='sword ${swordSide}-sword' src='./images/${swordSide}-sword.png' alt='shiny silver sword' />`);
  },

  removeOppositeSword: function(player1Turn) {
    let oppositeSide = player1Turn ? "right" : "left";
    $(`.${oppositeSide}-sword`).remove();
  },

  clearInput: function() {
    $(".guess-input").val('');
  },

  showGuessMessage: function(guessType) {
    $(`.${guessType}-guess`).removeClass("hidden");
  },

  hideGuessMessages: function() {
    $(".correct-guess").addClass("hidden");
    $(".wrong-guess").addClass("hidden");
  },

  animateKnight: function(currentRound) {
    let src = "./images/round-one.png";
    if (currentRound === 2) {
      src = "./images/round-two.png";
    } else if (currentRound === 3) {
      src = "./images/final-round.png";
    }
    $(".round-banner-text").attr("src", src);
    $(".round-banner").css({'right': '0px', 'display': 'block'}).animate({'right': '3000px'}, 6000);
  },

  revealTimer: function() {
    $(".timer").removeClass('hidden');
    $(".start-timer-btn").removeClass('hidden');
  },

  incrementTimer: function(seconds) {
    $(".timer").text(seconds);
  },

  toggleUserInput: function() {
    $(".user-input").toggleClass('hidden');
    $(".incorrectGuess-holder").toggleClass('hidden');
  },

  showIncorrectGuessPoints: function (incorrectGuessText, incorrectGuessPoints) {
    $("#incGuess-num").text(incorrectGuessText);
    $("#incGuess-points").text(incorrectGuessPoints)
  },

  resetTimer: function () {
    $(".timer").text(30);
  },

  showWinner: function(winner) {
    this.toggleMultiplierInputs(false);
    $(".winner-holder").removeClass("hidden");
    $("#winner-name").text(winner.name);
    $("#winner-score").text(winner.score);
  },

  hideWinner: function() {
    $(".winner-holder").addClass("hidden");
    $(".sb-one > h6").text('00');
    $(".sb-two > h6").text('00');
  }
}

export default domUpdates;