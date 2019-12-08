import React, {useState} from 'react';
import {connect} from 'react-redux';

import InputComp from '../SignComp/InputComp';
import ButtonComp from '../SignComp/ButtonComp';
import {signInStartAsync,googleSignInStartAsync} from '../../redux/user/user-thunk';


const SignIn = (props) => {
    const [userCredentials,setCCredentials]=useState({email:'',password:''})
    const { email, password } = userCredentials;
    
    const handleSubmit = async event => {
      event.preventDefault();
      props.signInStartAsync(userCredentials);
      setCCredentials({ email: '', password: '' });
    };

    const handleChange = event => {
      const { value, name } = event.target;
      setCCredentials({...userCredentials, [name]: value });
    };

    return (
      <div className="col-lg-4 m-5">
        <h4>I already have a account</h4>
        <p>Sign in with email and password</p>
        <form onSubmit={handleSubmit}>
            <InputComp name="email" type="email" label="Email" value={email} handleChange={handleChange} />
            <InputComp name="password" type="password" label="Password" value={password} handleChange={handleChange} />
            <ButtonComp type='submit'> Sign In </ButtonComp>
            <ButtonComp onClick={props.googleSignInStartAsync} isGoogle>
              Sign in with Google
            </ButtonComp>
        </form>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  signInStartAsync: (userCredentials) => dispatch(signInStartAsync(userCredentials)),
  googleSignInStartAsync: ()=>dispatch(googleSignInStartAsync())
});

export default connect(null, mapDispatchToProps)(SignIn);