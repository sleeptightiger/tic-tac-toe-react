import React, { Component } from 'react';


class Header extends Component {
  render() {
    let message = "It's your turn.";
    let win = '';
    if(this.props.gameOver) {
      message = "You win!!";
      win = 'win';
    }
    return (
      <div className="header">
        <h1>Tic-Tac-Toe</h1>
        <div className="displayTurn">
          <span className={this.props.turn + ' ' + win}>{this.props.turn}</span>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

export default Header;
