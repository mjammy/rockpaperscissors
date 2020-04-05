import React from 'react';
import './App.css';

import Game from '../game/Game';
import Scoreboard from '../game/scoreboard/Scoreboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [0,0],
    };
  }

  ////////////////////////////////////////////////////

  handleResult(result) {
    let i = result.charAt(7)-1;
    
    const scores = this.state.scores.slice();
    scores[i]++;
    this.setState({scores: scores});
  }

  handleReset() {
    this.setState({scores: [0,0]});
  }

  ////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <Scoreboard scores={this.state.scores}
                    onReset={() => this.handleReset()}/>
        <Game scores={this.state.scores} 
              onResult={(result) => this.handleResult(result)}/>
      </div>
    );
  }
}

export default App;
