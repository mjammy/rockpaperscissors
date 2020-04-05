import React from 'react';

import Rock from './rock/Rock';
import Paper from './paper/Paper';
import Scissors from './scissors/Scissors';

class RPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: this.props.choice,
    };
  }

  render() {
    return (
      <div>
        <h2>Player {this.props.player}</h2>
        <Rock onClick={() => this.props.onChoose("Rock")}/>
        <Paper onClick={() => this.props.onChoose("Paper")}/>
        <Scissors onClick={() => this.props.onChoose("Scissors")}/>
        <h4>{this.props.choice}</h4>
      </div> 
    );
  }
}

export default RPS;