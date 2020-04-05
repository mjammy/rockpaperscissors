import React from 'react';
import './game.css';

import RPS from './RPS/RPS'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ["im thinking", "im thinking"],
      result: null,
    };
  }

  ////////////////////////////////////////////////////


  handleChoice(i, choice) {
    const choices = this.state.choices.slice();
    choices[i] = choice;
    this.setState({choices: choices, result: null});
  }

  handleSubmit()  {
    const wins = {
      "Rock": "Scissors",
      "Paper": "Rock",
      "Scissors": "Paper" 
    };

    let choice1 = this.state.choices[0];
    let choice2 = this.state.choices[1];
    var result;

    if (choice1 === choice2) {
      result = "Tie.";
    }
    else if ((wins[choice1]) === choice2) {
      result = "Player 1 Wins!";
    }
    else {
      result = "Player 2 Wins!";
    }

    this.setState({result: result});
    this.props.onResult(result);
  }

  ////////////////////////////////////////////////////

  renderRPS(player) {
    return <RPS player={player} 
                choice={this.state.choices[player-1]}
                onChoose={(choice) => this.handleChoice(player-1, choice)}/>
  }

  renderResult() {
    let choice1 = this.state.choices[0];
    let choice2 = this.state.choices[1];
    let result = this.state.result;

    if (this.state.result !== null) {
      return (
        <div>
          <h4>"{choice1}" vs. "{choice2}"</h4>
          <h3>{result}</h3>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderRPS(1)}
        <br />
        {this.renderRPS(2)}        
        <button onClick={() => this.handleSubmit()}>Submit</button>
        {this.renderResult()}
      </div>
    );
  }
}

export default Game;
