import React from 'react'


const ButtonComp = (props) => (
  <button className={props.isGoogle?'btn btn-primary mr-2':'btn btn-outline-dark mr-2'}  onClick={props.signInWithGoogle} type={props.type} >
    {props.children}
  </button>
);


export default ButtonComp;