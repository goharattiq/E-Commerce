import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectHomeSections} from '../redux/home/home-selectors';
import MenuItem from './MenuItem';



const MenuList = (props) => {
  const {sections}=props;
  return (
    <div className="row text-center jumbotron">
      {sections.map((section)=>{
         return (<MenuItem key={section.id} section={section}/>) 
      })}
   </div>
  )
}

const mapStateToProps=createStructuredSelector({
  sections:selectHomeSections
})

export default connect(mapStateToProps)(MenuList);