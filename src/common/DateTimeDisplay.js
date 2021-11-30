import React, { Component } from 'react'
import moment from 'moment'

class DateTimeDisplay extends Component {
  render() {
    const { date, relative, timeFormat } = this.props

    if (relative) {
      return <span className={this.props.className}>{moment(date).fromNow()}</span>
    }

    return (
      <span className={this.props.className}>
        {timeFormat === 'hh:mm' ? moment(date).format('ll') : moment(date).format('LLL')}
      </span>
    )
  }
}

export default DateTimeDisplay