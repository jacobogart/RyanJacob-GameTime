import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

var sinon = require('sinon');

import FinalRound from '../src/FinalRound.js';
import Game from '../src/Game.js';
import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, ['incrementTimer'], () => true);


describe('Final Round', function () {
  let finalRound, game, player1, player2, clock;
  beforeEach(() => {
    player1 = new Player('Jacob', 1);
    player2 = new Player('Ryan', 2);
    game = new Game(player1, player2);
    finalRound = new FinalRound(game);
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock = sinon.restore();
  });

  it('should be an instance of Final Round', function () {
    expect(finalRound).to.be.instanceof(FinalRound);
  });
  it('should have a random survey', () => {
    expect(finalRound).to.have.property('survey');
    expect(finalRound.survey).to.be.an('object');
    expect(finalRound.survey).to.have.all.keys('id', 'question');
  });
  it('should have an array of answers', () => {
    expect(finalRound).to.have.property('answers');
    expect(finalRound.answers).to.be.an('array');
    expect(finalRound.answers.length).to.equal(3);
  });
  it('should have a timer that starts at thirty', () => {
    expect(finalRound.timer).to.equal(30);
  });
  it('should have an empty array of correctGuesses', () => {
    expect(finalRound).to.have.property('answers');
    expect(finalRound.correctGuesses).to.be.an('array');
    expect(finalRound.correctGuesses.length).to.equal(0);
  });
  it('should have property of incorrectGuesses that starts at zero', () => {
    expect(finalRound.incorrectGuesses).to.equal(0);
  });

  it('should have a timer that increments be seconds', function () {
    expect(finalRound.timer).to.equal(30);
    finalRound.startTimer(finalRound, game)
    clock.next();
    expect(finalRound.timer).to.equal(29);
    clock.next();
    expect(finalRound.timer).to.equal(28);
  });

});