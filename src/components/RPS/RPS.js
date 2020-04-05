import React from 'react';

import Rock from './rock/Rock';
import Paper from './paper/Paper';
import Scissors from './scissors/Scissors';

class RPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: this.props.choice,
      player: null,
    };
  }

  renderPlayer(num) {
    return <h1>Player {num}</h1>;
  }

  renderChoice(choice) {
    return <h2>{choice}</h2>;
  }

  render() {
    return (
      <div>
        {this.renderPlayer(this.props.player)}
        <Rock onClick={() => this.props.onChoose("Rock")}/>
        <Paper onClick={() => this.props.onChoose("Paper")}/>
        <Scissors onClick={() => this.props.onChoose("Scissors")}/>
        {this.renderChoice(this.props.choice)}
      </div> 
    );
  }
}

export default RPS;