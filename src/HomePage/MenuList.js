import React,{Component} from 'react';
import MenuItem from './MenuItem';
import {sections} from './Sections';


class MenuList extends Component {
  constructor(props){
      super(props)
      this.state={
          sections:sections
      }
  }

  render() {
      const {sections}=this.state;
    return (
        <div className="row text-center jumbotron">
        {sections.map((section)=>{
           return (<MenuItem key={section.id} section={section}/>) 
        })}
     </div>
    )
  }
  
}

export default MenuList;