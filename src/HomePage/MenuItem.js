import React from 'react'

const MenuItem= (props) => {
  return (
    <div className="col-lg-4 menu-item">
        <img src={props.section.imageUrl} alt="section" className="img-thumbnail menu-img grow"/>
        <div className="inside-box pt-2">
          <h3 className="title">{props.section.title.toUpperCase()}</h3>
          <span className="subtitle">SHOP NOW</span>
        </div>
      
    </div>
  )
}

export default MenuItem;