import React from 'react'

import scissors from './scissors.png';

import './scissors.css'

class Scissors extends React.Component {
  render() {
    return <img 
              src={scissors} 
              className="rps scissors" 
              alt="scissors"
              onClick={() => this.props.onClick()} />
  }
}
export default Scissors;