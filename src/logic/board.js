import Tile from './tile.js';

const FILES = 'abcdefgh';
const BOARD = [];

for (let row = 0; row < 8; row++) {
  const boardRow = [];
  for (let col = 0; col < 8; col++) {
    const file = FILES[col];
    const rank = 8 - row;
    const position = `${file}${rank}`;
    const tile = new Tile(position);
    
    console.log("Position: " + position, tile);
    
    boardRow.push(tile);
  }
  BOARD.push(boardRow);
}

export default BOARD;