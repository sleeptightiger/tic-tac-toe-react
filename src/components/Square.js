import React, { Component } from 'react';


class Square extends Component {

  render() {
    const mark = this.props.mark;
    let winner = '';
    const winners = this.props.winners.split(',');
    if(this.props.gameOver) {
      for (var i = 0; i < winners.length; i++) {
        if(this.props.index.toString() === winners[i].toString()) {
          winner = 'winner';
        }
      }
    }
    return (
      <div className={"square " + winner} onClick={this.props.click}>
        <h1>[{this.props.clicked ? <span>{mark}</span> : <span> &nbsp; </span>}]</h1>
      </div>
    );
  }
}

export default Square;
