import React from 'react'

import rock from './rock.png';

import './rock.css'

class Rock extends React.Component {
  render() {
    return <img 
              src={rock} 
              className="rps rock" 
              alt="rock"
              onClick={() => this.props.onClick()} />
  }
}

export default Rock;