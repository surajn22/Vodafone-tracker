import React, { Component } from 'react'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import DateTimeDisplay from '../../common/DateTimeDisplay'
import Icon from '../../common/Icon'
class Activity extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activityCode: this.props.activityCode,
      status: this.props.status,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      startTime: this.props.startTime,
      endTime: this.props.endTime,
      customerMessage: this.props.customerMessage
    }
  }

  getStatus() {
    return this.state.status === 'completed' ?
      <span className="details" style={{ color: 'green' }}>Completed</span> :
      <span className="details" style={{ color: 'red' }}>Active</span>
  }

  render() {
    return (
      <div className="activity">
        <h3 className="details" >{this.state.activityCode} | {this.getStatus()}</h3>
        <DateTimeDisplay date={this.state.startDate + 'T' + this.state.startTime} />
        <Icon icon={faComment} color="#E62000" customerMessage={this.state.customerMessage} />
      </div>
    );
  }
}
export default Activity