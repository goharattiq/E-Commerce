import React, {useState} from 'react';
import {connect} from 'react-redux';
import InputComp from '../SignComp/InputComp';
import ButtonComp from '../SignComp/ButtonComp';
import {signUpStartAsync} from '../../redux/user/user-thunk';

const SignUp = (props) => {
    const [userCredentials,setCredentials]=useState({
      displayName:"",email:"",password:"",confirmPassword:""
      })
    const {displayName,email,password,confirmPassword}=userCredentials;
    const handleSubmit = async event=>{
        event.preventDefault();
        props.signUpStartAsync(userCredentials);
        setCredentials({
              displayName:"",
              email:"",
              password:"",
              confirmPassword:""
            });
    }

    const handleChange = event => {
      const { value, name } = event.target;
      
      setCredentials({...userCredentials,[name]: value });
    };

      return (
        <div className="col-lg-4 m-5">
          <h4>I donot have an account</h4>
          <p>Sign Up with email and password</p>
          <form onSubmit={handleSubmit}>
              <InputComp name="displayName" label="Display Name" type="text" value={displayName} handleChange={handleChange} />
              <InputComp name="email" type="email" label="Email" value={email} handleChange={handleChange} />
              <InputComp name="password" type="password" label="Password" value={password} handleChange={handleChange} />
              <InputComp name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} handleChange={handleChange} />
              <ButtonComp type='submit'> Sign Up </ButtonComp>
          </form>
        </div>
      )
}

const mapDispatchToProps = dispatch => ({
  signUpStartAsync : userCredentials => dispatch(signUpStartAsync(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);