import React, { Component } from 'react';
import { Cascader } from 'antd';
//import '../css/aboutme.css';
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

class HomeAdd extends Component {
  render() {
    return (
		<Cascader options={options} onChange={onChange} placeholder="Please select" />
    );
  }
}
export default HomeAdd;