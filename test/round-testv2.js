import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Round from '../src/Round.js';
import gamedata from '../src/gamedata.js';



describe('Round', function () {
  describe('New Round', () => {
    it('should have a random survey', () => {
      let game = new Game();
      let round = new Round(game);
      expect(round).to.have.property('survey');
      expect(round.survey).to.be.an('object');
      expect(round.survey).to.have.all.keys('id', 'question');
    });

    it('should have an array of answers', () => {
      let game = new Game();
      let round = new Round(game);
      expect(round).to.have.property('answers');
      expect(round.answers).to.be.an('array');
      expect(round.answers.length).to.equal(3);

    });
  });

  describe('getSurvey', () => {
    it.skip('should return a single survey object', () => {
      let game = new Game();
      let round = new Round(game);
      // blah blah expectation here
    });
  });

  describe('getAnswers', () => {
    it.skip('should return an array of answers that match the survey ID', () => {
      // blah blah expectation here
    })
  });

});