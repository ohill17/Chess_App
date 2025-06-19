import React from 'react';
import BOARD from '../logic/board.js';

export default function Game() {

  return (
    <div>
      <h2>Chess Game</h2>
      <div className="Board" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 40px)' }}>
        {
          BOARD.flat().map((tile, idx) => (
            <div
              key={tile.position}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: (Math.floor(idx / 8) + idx % 8) % 2 === 0 ? '#eee' : '#666',
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black'
              }}
            >
              {tile.position}
            </div>
          ))
        }
      </div>
    </div>
  );
}
