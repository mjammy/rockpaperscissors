import React from 'react';
//import './game.css';

//import RPS from './RPS/RPS'

class Scoreboard extends React.Component {
        
    renderScoreRow(player) {
        return <h3>Player {player}: {this.props.scores[player-1]}</h3>;
    }

    render() {
        return (
            <div>
                <h1>Scoreboard</h1>
                <div>
                    {this.renderScoreRow(1)}
                    {this.renderScoreRow(2)}
                    <button onClick={() => this.props.onReset()}>Reset</button>
                </div>
                <hr />
            </div>
        );
    }
}

export default Scoreboard;