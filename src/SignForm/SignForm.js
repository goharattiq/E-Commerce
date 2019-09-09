import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const SignForm=()=> {
  return (
    <div className="row">
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignForm;