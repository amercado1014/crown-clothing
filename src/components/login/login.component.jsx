import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { name , value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='login'>
        <h2 className='title'>I already have an account</h2>
        <span>Log in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
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
