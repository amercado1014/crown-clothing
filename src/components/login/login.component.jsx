import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './login.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = event => {
    const { name , value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='login'>
        <h2>I already have an account</h2>
        <span>Log in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            label='Password'
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit' value='Submit Form'>
            Log In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
