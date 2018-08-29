import React, { Component } from 'react';
import './App.css';
import QuestionSet from './QuestionSet';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeId: '',
      employeeIdValid: false,
      loggedIn: false

    }
  }
  handleSubmit = e => {
    this.setState({ loggedIn: true });
  }
  handleUserInput = e => {
    let value = e.target.value;
    this.setState({ employeeId: value });
    this.validateField(value);
  }
  validateField = value => {
    let employeeIdValidNew = (value.length === 7) && (/^\d+$/.test(value));
    this.setState({ employeeIdValid: employeeIdValidNew });
  }
  render() {
    if (this.state.loggedIn)
      return (
        <QuestionSet />
      );

    return (
      <div className='stylePage'>
        <form className='demoForm' onSubmit={this.handleSubmit} >

          <div className='form-group'>
            <label htmlFor='employeeId'>Employee Id</label>
            <input type="text" className="form-control"
              value={this.state.employeeId}
              onChange={this.handleUserInput} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.employeeIdValid}  >
            Sign in
       </button>
        </form>
      </div>
    )
  }
}
export default Login;