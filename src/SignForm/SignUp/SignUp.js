import React, { Component } from 'react';
import InputComp from '../SignComp/InputComp';
import ButtonComp from '../SignComp/ButtonComp';
import {auth,createUserProfileDocument} from '../../Firebase/firebase';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleSubmit = async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword){
          alert("Password don't match");
          return;
        }

        try{
          const {user}=await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfileDocument(user,{ displayName })
          this.setState({
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
          });
        }catch(error){
            console.log(error.message);
        }
    }

    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };

    render() {
      const {displayName,email,password,confirmPassword}=this.state;
      return (
        <div className="col-lg-4 m-5">
          <h4>I donot have an account</h4>
          <p>Sign Up with email and password</p>
          <form onSubmit={this.handleSubmit}>
              <InputComp name="displayName" label="Display Name" type="text" value={displayName} handleChange={this.handleChange} />
              <InputComp name="email" type="email" label="Email" value={email} handleChange={this.handleChange} />
              <InputComp name="password" type="password" label="Password" value={password} handleChange={this.handleChange} />
              <InputComp name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} handleChange={this.handleChange} />
              <ButtonComp type='submit'> Sign Up </ButtonComp>
          </form>
        </div>
      )
    }
}


export default SignUp;