import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

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
        <h2 className='title'>I already have an account</h2>
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
          <div className='buttons'>
            <CustomButton type='submit'>
              Log In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleButton>
              Log In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
