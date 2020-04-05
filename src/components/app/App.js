import React from 'react';
import './App.css';

import RPS from '../RPS/RPS.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ["im thinking", "im thinking"],
      submitted: false,
    };
  }

  handleChoice(i, choice) {
    const choices = this.state.choices.slice();
    choices[i] = choice;
    this.setState({choices: choices, submitted: false});
  }

  renderSubmission() {
    const wins = {
      "Rock": "Scissors",
      "Paper": "Rock",
      "Scissors": "Paper" 
    };
    
    if (this.state.submitted) {
      let choice1 = this.state.choices[0];
      let choice2 = this.state.choices[1];
      var result;
  
      if (choice1 == choice2) {
        result = "Tie.";
      }
      else if ((wins[choice1]) == choice2) {
        result = "Player 1 Wins!";
      }
      else {
        result = "Player 2 Wins!";
      }

      return (
        <div>
          <h4>{choice1}</h4>
          <h6>vs.</h6>
          <h4>{choice2}</h4>
          <br/>
          <h3>{result}</h3>
        </div>
      );
    }
  }



  render() {
    return (
      <div>
        <RPS  player={1} 
              choice={this.state.choices[0]}
              onChoose={(choice) => this.handleChoice(0, choice)}/>
        <br />
        <RPS  player={2} 
              choice={this.state.choices[1]}
              onChoose={(choice) => this.handleChoice(1, choice)}/>
        <hr />
        <button onClick={() => this.setState({submitted:true})}>Submit</button>
        {this.renderSubmission()}
      </div>
    );
  }
}

export default App;
