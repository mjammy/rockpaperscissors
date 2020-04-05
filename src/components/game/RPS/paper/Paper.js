import React from 'react'

import paper from './paper.png';

import './paper.css'

class Paper extends React.Component {
  render() {
    return <img 
              src={paper} 
              className="rps paper" 
              alt="paper"
              onClick={() => this.props.onClick()} />
  }
}

export default Paper;