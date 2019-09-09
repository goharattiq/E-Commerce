import React from 'react'

const InputComp=(props)=> {
  return (
    <div className="form-group">
       <input  className="form-control w-50" value={props.value} name={props.name} type={props.type} onChange={props.handleChange} required/>
       <label className="form-control-placeholder" htmlFor="name">{props.label}</label>
    </div>
  )
}

export default InputComp;