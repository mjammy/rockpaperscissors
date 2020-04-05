import React from 'react';

import Rock from './rock/Rock';
import Paper from './paper/Paper';
import Scissors from './scissors/Scissors';

class RPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "OG",
    };
  }

  renderChoice(choice) {
    return <h2>{choice}</h2>;
  }

  render() {
    return (
      <div> 
        <Rock onClick={() => this.setState({choice: "Rock"})}/>
        <Paper onClick={() => this.setState({choice: "Paper"})}/>
        <Scissors onClick={() => this.setState({choice: "Scissors"})}/>
        {this.renderChoice(this.state.choice)}
      </div> 
    );
  }
}

export default RPS;