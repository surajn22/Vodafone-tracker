import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Icon extends Component {
  render() {
    const { icon, color, customerMessage } = this.props
    return (
      <p> < FontAwesomeIcon icon={icon} color={color} /> {customerMessage}</p >
    )
  }
}
export default Icon