
import $ from 'jquery';

const domUpdates = {
  updateNames: (name1, name2) => {
    $(".player1-name > h4").text(name1);
    $(".player2-name > h4").text(name2);
  },
  
  revealGame: () => {
    this.toggleNameInputContainer(false);
    this.toggleGameArea(true);
    this.toggleStartNewGameBtn(true);
  },

  hideGame: () => {
    this.toggleGameArea(false);
    this.toggleNameInputs(false);
    this.toggleMultiplierInputs(true);
    this.toggleNameInputContainer(true);
  },

  resetGame: () => {
    this.toggleGameArea(false);
    this.toggleNameInputContainer(true);
    this.toggleNameInputs(true);
    this.toggleStartNewGameBtn(false);
    this.resetScore();
  },

  toggleStartNewGameBtn: (showThis) => {
    $(".new-game-btn").toggle(showThis);
  },

  toggleNameInputContainer: (showThis) => {
    $(".name-input-container").toggle(showThis);
  },

  toggleNameInputs: (showThis) => {
    $(".name-inputs").toggle(showThis);
  },

  toggleGameArea: (showThis) => {
    $(".game-area").toggle(showThis);
  },

  toggleMultiplierInputs: (showThis) => {
    $(".multiplier-inputs").toggle(showThis);
  },

  populateSurvery: (round) => {
    $(".survey").text(round.survey.question);
  },

  populateAnswers: (round) => {
    round.answers.forEach((answer, i) => {
      $(`.answer${i}`).text(answer.answer);
      $(`.answer${i}`).addClass("hidden");
      $(`.answer${i}-num`).text(answer.respondents);
      $(`.answer${i}-num`).addClass("hidden");
    });
  },

  revealCorrectAnswer: (correctAnswer) => {
    $(".answer").each(() => {
      if ($(this).text() === correctAnswer.answer) {
        $(this).removeClass("hidden");
        $(this).parent().next().children().removeClass("hidden");
      }
    });
  },

  updateScore: (player, score) => {
    player === 1 ? $(".sb-one > h6").text(score) : $(".sb-two > h6").text(score);
  },

  resetScore: () => {
    $(".sb-one > h6").text('0');
    $(".sb-two > h6").text('0');
  },
  
  toggleActivePlayer: (player1Turn) => {
    this.addSwordTurnIndicator(player1Turn);
    this.removeOppositeSword(player1Turn);
  },

  addSwordTurnIndicator: (player1Turn) => {
    let playerBox = player1Turn ? $(".pb-one") : $(".pb-two");
    let swordSide = player1Turn ? "left" : "right";
    playerBox.prepend(`<img class='sword ${swordSide}-sword' src='./images/${swordSide}-sword.png' alt='shiny silver sword' />`);
  },

  removeOppositeSword: (player1Turn) => {
    let oppositeSide = player1Turn ? "right" : "left";
    $(`.${oppositeSide}-sword`).remove();
  },

  clearInput: () => {
    $(".guess-input").val('');
  },

  showGuessMessage: (guessType) => {
    $(`.${guessType}-guess`).removeClass("hidden");
  },

  hideGuessMessages: () => {
    $(".correct-guess").addClass("hidden");
    $(".wrong-guess").addClass("hidden");
  },

  animateKnight: (currentRound) => {
    let src = "./images/round-one.png";
    if (currentRound === 2) {
      src = "./images/round-two.png";
    } else if (currentRound === 3) {
      src = "./images/final-round.png";
    }
    $(".round-banner-text").attr("src", src);
    $(".round-banner").css({'right': '0px', 'display': 'block'}).animate({'right': '3000px'}, 6000);
  },

  revealTimer: () => {
    $(".timer").removeClass('hidden');
    $(".start-timer-btn").removeClass('hidden');
  },

  incrementTimer: (seconds) => {
    $(".timer").text(seconds);
  },

  toggleUserInput: () => {
    $(".user-input").toggleClass('hidden');
    $(".incorrectGuess-holder").toggleClass('hidden');
  },

  showIncorrectGuessPoints: (incorrectGuessText, incorrectGuessPoints) => {
    $("#incGuess-num").text(incorrectGuessText);
    $("#incGuess-points").text(incorrectGuessPoints)
  },

  resetTimer: () => {
    $(".timer").text(30);
  },

  showWinner: (winner) => {
    this.toggleMultiplierInputs(false);
    $(".winner-holder").removeClass("hidden");
    $(".winner-holder").removeClass("hidden");
    $("#winner-name").text(winner.name);
    $("#winner-score").text(winner.score);
  }

}

export default domUpdates;