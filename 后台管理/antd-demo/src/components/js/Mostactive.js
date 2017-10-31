import React, { Component } from 'react';
import '../css/common.css';
import '../css/indexstyle.css';

class Mostactive extends Component{
  constructor(){
    super()
  }
  render(){
    let {title,time}=this.props
    return(
      <li>
        <span>{title}</span>
        <span>{time}</span>
      </li>
    )
  }
}
export default Mostactive;
