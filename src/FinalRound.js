import Round from './Round.js';
import domUpdates from './domUpdates.js';

class FinalRound extends Round {
  constructor(survey, answers) {
    super(survey, answers);
    this.timer = 30;
    this.correctGuesses = []
    this.incorrectGuesses = 0
  }

  startTimer(round, game) {
    this.timer = 30; 
    let seconds;
    let timerInterval = setInterval(function () {
      this.timer--;
      seconds = parseInt(this.timer % 60, 10);
      seconds = this.timer < 10 ? "0" + seconds : seconds;
      domUpdates.incrementTimer(seconds);
      if (this.timer <= 0) {
        clearInterval(timerInterval);
        this.addTotalScore(round, game);
      }
    }.bind(this), 1000);
  }

  addTotalScore(round, game) {
    let player = game.player1.isTurn ? game.player1 : game.player2;
    round.correctGuesses.sort((a, b) => {
      return b.respondents - a.respondents
    }).forEach((guess, index) => {
      setTimeout(function () {
        player.score += (guess.respondents * player.multiplier);
        domUpdates.revealCorrectAnswer(guess);
        domUpdates.updateScore(player.playerNum, player.score);
      }, (index + 1) * 1000)
    }); 
    setTimeout(function () {
      this.subtractIncorrectGuesses(player);
    }.bind(this), 4000);
    if (game.player1.isTurn) {
      setTimeout(function () {
        domUpdates.resetTimer();
        this.startFinalRoundTwo(game);
      }.bind(this), 9000);
    } else {
      setTimeout(function () {
        this.declareWinner(game);
      }.bind(this), 7000)
    }
  }

  subtractIncorrectGuesses(player) {
    domUpdates.toggleUserInput();
    let incorrectGuessPoints = this.incorrectGuesses * 5 * player.multiplier;
    domUpdates.showIncorrectGuessPoints(this.incorrectGuesses, incorrectGuessPoints);
    player.score -= incorrectGuessPoints;
    domUpdates.updateScore(player.playerNum, player.score);
    setTimeout(function () {
      domUpdates.toggleUserInput();
    }, 5000);
  }

  startFinalRoundTwo(game) {
    game.round = new FinalRound(game);
    game.toggleIsTurn();
    domUpdates.populateSurvery(game.round);
    domUpdates.populateAnswers(game.round);
  }

  

  declareWinner(game) {
    let winner = game.player1.score > game.player2.score ? game.player1 : game.player2;
    domUpdates.hideGame();
    domUpdates.showWinner(winner);
  }
}

export default FinalRound;