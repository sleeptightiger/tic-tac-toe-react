import React, { Component } from 'react';


class ResetButton extends Component {
  render() {
    return (
      <button onClick={this.props.resetBoard}>Reset</button>
    );
  }
}

export default ResetButton;
