import React from 'react';
import {withRouter} from 'react-router-dom';

const MenuItem= (props) => {
  return (
    <div className="col-lg-4 col-md-6 menu-item"  onClick={() => props.history.push(`${props.match.url}${props.section.linkUrl}`)}>
        <img src={props.section.imageUrl} alt="section" className="img-thumbnail menu-img grow"/>
        <div className="inside-box pt-2">
          <h3 className="title">{props.section.title.toUpperCase()}</h3>
          <span className="subtitle">SHOP NOW</span>
        </div>
      
    </div>
  )
}

export default withRouter(MenuItem);