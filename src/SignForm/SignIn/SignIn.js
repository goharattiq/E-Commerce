import React, { Component } from 'react';
import InputComp from '../SignComp/InputComp';
import ButtonComp from '../SignComp/ButtonComp';
import {auth,signInWithGoogle} from '../../Firebase/firebase';


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit = async event => {
      event.preventDefault();
  
      const { email, password } = this.state;
  
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      } catch (error) {
        console.log(error);
      }
    };

    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };

  render() {
    return (
      <div className="col-lg-4 m-5">
        <h4>I already have a account</h4>
        <p>Sign in with email and password</p>
        <form onSubmit={this.handleSubmit}>
            <InputComp name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange} />
            <InputComp name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} />
            <ButtonComp type='submit'> Sign In </ButtonComp>
            <ButtonComp onClick={signInWithGoogle} isGoogle>
              Sign in with Google
            </ButtonComp>
        </form>
      </div>
    )
  }
}


export default SignIn;