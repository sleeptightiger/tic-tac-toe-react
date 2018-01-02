import React, { Component } from 'react';
import Header from './components/Header.js';
import Board from './components/Board.js';
import ResetButton from './components/ResetButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winnerMarks: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      winnerStrike: '',
      turn: 'X',
      gameOver: false,
      board: [
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        },
        {
          clicked: false,
          mark: '',
        }]
        ,
    }
    this.toggleClick = this.toggleClick.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }


  checkWin = () => {
    let marks = []
    for(let i = 0; i < this.state.board.length; i++) {
      if(this.state.board[i].mark === this.state.turn) {
        marks.push(i);
      }
    }

    for (var i = 0; i < this.state.winnerMarks.length; i++) {
     let count = 0;
     let index;
     for (var j = 0; j < marks.length; j++) {
       console.log(marks[j] + " " + this.state.winnerMarks[i][j]);
       if(marks[j] === this.state.winnerMarks[i][j]) {
         count += 1;
         index = i;
       }
     }
     if(count === 3) {
       return this.state.winnerMarks[index];
     }
    }
    return false;

  }

  toggleClick = index => {

    const board = this.state.board;
    if(!this.state.gameOver){
      if(!board[index].clicked){
        board[index].clicked = !board[index].clicked;
        board[index].mark = this.state.turn;

        const winners = this.checkWin();
        if(winners) {
          this.setState({
            board: board,
            gameOver: true,
            winnerStrike: winners.toString(),
          });
          console.log(this.state.winnerStrike);
        } else {
          let thisTurn = '';
          if(this.state.turn === 'X') {
            thisTurn = 'O';
          } else {
            thisTurn = 'X';
          }
          this.setState({
            board: board,
            turn: thisTurn,
          });
        }

      }
    }
  }

  resetBoard = () => {
    const board = this.state.board;
    for (let i = 0; i < this.state.board.length; i++) {
      board[i].mark = '';
      board[i].clicked = false;
    }
    this.setState({
      board: board,
      gameOver: false,
      turn: 'X',
      winnerStrike: '',
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          gameOver={this.state.gameOver}
          turn={this.state.turn}/>
        <Board
          board={this.state.board}
          toggleClick={this.toggleClick}
          winners={this.state.winnerStrike}
          gameOver={this.state.gameOver}/>
        <ResetButton resetBoard={this.resetBoard} />
      </div>
    );
  }
}

export default App;
