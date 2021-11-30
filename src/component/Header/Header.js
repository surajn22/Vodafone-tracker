import React, { Component } from 'react'
import "react-awesome-button/dist/styles.css";
import Buttons from '../../common/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import DateTimeDisplay from '../../common/DateTimeDisplay';
class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    }
  }

  getStatus(ticketInfo) {
    return ticketInfo.woStatusText === 'In Progress' ?
      <span className="details" style={{ fontWeight: 'bold', color: 'green' }}>In Progress</span>
      : <span className="details" style={{ fontWeight: 'bold', color: 'blue' }}>{ticketInfo.woStatusText}</span>
  }

  render() {
    const ticketInfo = Object.assign({}, this.state.data);
    return (
      <div className="head">
        <h2 className="title">Ticket no: #{ticketInfo.woNum}</h2>
        <h3 className="details">Status: {this.getStatus(ticketInfo)}</h3>
        <h3 className="details">Created On: <DateTimeDisplay date={ticketInfo.creationDate} timeFormat={'hh:mm'} /> </h3>
        <div className='container-fluid'>
          {
            ticketInfo.cancelable === true && ticketInfo.woStatusText === 'In Progress' ?
              <Buttons variant='danger' tooltip={'Cancel the Ticket'} size='sm' label=' Cancel Ticket ' /> :
              <Buttons variant='primary' tooltip={'Reopen the Ticket'} size='sm' label=' Reopen Ticket' />
          }
        </div>
      </div >
    )
  }
}
export default Header