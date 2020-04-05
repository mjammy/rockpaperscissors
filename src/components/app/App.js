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
    this.setState({choices: choices});
  }

  renderSubmission() {
    if(this.state.submitted) {
      return (
        <div>
          <h4>{this.state.choices[0]}</h4>
          <h6>vs.</h6>
          <h4>{this.state.choices[1]}</h4>
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
