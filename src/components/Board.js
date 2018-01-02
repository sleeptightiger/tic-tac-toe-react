import React, { Component } from 'react';
import Square from './Square.js';


class Board extends Component {

  render() {
    let newBoard = this.props.board.map((square, index) => {
      return <Square
                key={index}
                index={index}
                mark={square.mark}
                clicked={square.clicked}
                winners={this.props.winners}
                gameOver={this.props.gameOver}
                click={() => this.props.toggleClick(index)}/>
    });

    return (
      <div className="board">
        {newBoard}
      </div>
    );
  }
}

export default Board;
