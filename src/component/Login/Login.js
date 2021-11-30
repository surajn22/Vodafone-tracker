import React, { Component } from 'react'
import App from '../../App'
import '../../css/login.css'
class Login extends Component {

  // dummy Login Page no authentication
  constructor(props) {
    super(props)

    this.state = {
      showActivities: false,
      userName: '',
      password: ''
    }

    this._onButtonClick = this._onButtonClick.bind(this);
  }
  // check the dummy values and proceed if correct
  _onButtonClick() {
    this.state.userName === 'd@d.com' && this.state.password === '1234' ? this.setState({ showActivities: true }) : alert('username and password is incorrect please see the readme');
  }
  // set the username
  onUsernameChange = (event) => {
    this.setState({ userName: event.target.value });
  }
  // set the password
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    const state = this.state
    if (state.showActivities) {
      return (
        <App />
      )
    }

    return (
      <div className="login">
        <div className="form" >
          <p className="logo"> </p>
          <input onChange={(e) => this.onUsernameChange(e)} type="text" placeholder="email" />
          <input onChange={(e) => this.onPasswordChange(e)} type="password" placeholder="password" />
          <button onClick={() => this._onButtonClick()} > login</button>
        </div>
      </div >
    )
  }
}

export default Login