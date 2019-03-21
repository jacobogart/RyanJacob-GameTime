import chai from 'chai';
const expect = chai.expect;

import FinalRound from '../src/FinalRound.js';
import Round from '../src/Round.js';
import Game from '../src/Game.js';
import gamedata from '../src/gamedata.js';


describe('Final Round', function () {
  it('should be an instance of Final Round', function () {
    let game = new Game();
    const finalRound = new FinalRound(game);
    expect(finalRound).to.be.instanceof(FinalRound);
  });
});