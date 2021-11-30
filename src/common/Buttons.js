import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ReactTooltip from "react-tooltip";

class Buttons extends Component {
  render() {
    const { variant, tooltip, label, size } = this.props
    return (
      <div>
        <Button variant={variant} data-tip={tooltip} size={size} data-for='toolTip1'> {label} </Button>
        <ReactTooltip id="toolTip1" />
      </div>
    )

  }
}
export default Buttons