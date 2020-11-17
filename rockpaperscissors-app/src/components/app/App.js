import React from 'react';
import './App.css';

import Game from '../game/Game';
import Scoreboard from '../game/scoreboard/Scoreboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [0,0,0],
      sponsor: null,
    };
  }

  ////////////////////////////////////////////////////

  componentDidMount() {
    fetch("/sponsor")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            sponsor: result.sponsor
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  ////////////////////////////////////////////////////

  handleResult(result) {
    let i = (/\d/.test(result) ? result.charAt(7)-1 : 2);

    const scores = this.state.scores.slice();
    scores[i]++;
    this.setState({scores: scores});
  }

  handleReset() {
    this.setState({scores: [0,0,0]});
  }

  ////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <h1>This App is Sponsored by {this.state.sponsor}</h1>
        <hr />
        <Scoreboard scores={this.state.scores}
                    onReset={() => this.handleReset()}/>
        <Game scores={this.state.scores} 
              onResult={(result) => this.handleResult(result)}/>
      </div>
    );
  }
}

export default App;
