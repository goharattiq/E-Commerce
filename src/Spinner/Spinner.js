import React from 'react'

const Spinner =WarappedComponenet=> (props) =>{
  return props.isLoading ? (
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  ):(
      <WarappedComponenet {...props}/>
  )
}

export default Spinner;
