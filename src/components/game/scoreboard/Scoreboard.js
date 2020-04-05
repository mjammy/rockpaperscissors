import React from 'react';
//import './game.css';

//import RPS from './RPS/RPS'

class Scoreboard extends React.Component {
        
    renderPlayerScoreRow(player) {
        return <h3>Player {player}: {this.props.scores[player-1]}</h3>;
    }

    renderTieRow() {
        return <h3>Tie: {this.props.scores[2]}</h3>;
    }

    render() {
        return (
            <div>
                <h1>Scoreboard</h1>
                <div>
                    {this.renderPlayerScoreRow(1)}
                    {this.renderPlayerScoreRow(2)}
                    {this.renderTieRow()}
                    <button onClick={() => this.props.onReset()}>Reset</button>
                </div>
                <hr />
            </div>
        );
    }
}

export default Scoreboard;