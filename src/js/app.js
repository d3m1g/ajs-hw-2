import { default as Game, GameSavingData, readGameSaving, writeGameSaving } from './game.js'
const loadGame = readGameSaving();
const saveGame = writeGameSaving();
const game = new Game();
game.start();