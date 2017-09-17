import React, { Component } from 'react';
import { Button } from 'antd';
import '../css/adduser.css';
class AddUser extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      sex:'',
      vip:'',
      cond:'',
      time:'',
      bgc:'adseact',
      colorid:1,
      one:1,
      two:2,
      three:3
    }
  }
  changesev=(ev)=>{
    this.setState({
      colorid:ev.target.id
    })
  }
  render(){
    return (
      <div className="adus">
        <div className="appuser clearfixqxk">
          <span>登录名</span>
          <input
            type="text"
            value={this.state.name}
            placeholder="请输入登录名"
            onChange={this.changename}
          />
        </div>
        <div className="email">
          <span>邮箱</span>
          <input
            type="text"
            value=""
            placeholder="请输入邮箱"
          />
        </div>
        <div className="addsex clearfixqxk">
          <span>性别</span>
          <div className="adsexxz clearfixqxk">
            <a href={'javascript:;'}
               className="clearfixqxk"
              onClick={this.changesev}
              id="1"
               >
              <i className={this.state.one==this.state.colorid?"adseact":""} id="1"></i>
              男
            </a>
            <a href={'javascript:;'}
              className="clearfixqxk"
              onClick={this.changesev}
              id="2"
              >
              <i
                className={this.state.two==this.state.colorid?"adseact":""}   id="2"></i>
              女
            </a>
            <a href={'javascript:;'}
              className="clearfixqxk"
              onClick={this.changesev}
              id="3"
              >
              <i
                className={this.state.three==this.state.colorid?"adseact":""} id="3"></i>
              保密
            </a>
          </div>
        </div>
        <div className="clearfixqxk">
	        <div className="gradevip clearfixqxk">
	          <span>会员等级</span>
	          <div className="grandhy">
	            <div className="zhucevip">
	              <em className="zhuccont">
	                注册会员
	              </em>
	              <i></i>
	            </div>
	            <ul>
	              <li>注册会员</li>
	              <li>中级会员</li>
	              <li>高级会员</li>
	              <li>超级会员</li>
	            </ul>
	          </div>
	        </div>
	        <div className="gradevip clearfixqxk">
	          <span>会员状态</span>
	          <div className="grandhy">
	          <div  className="zhucevip">
	            <em  className="zhuccont">
	              正常会员
	            </em>
	            <i></i>
	          </div>
	            <ul>
	              <li>正常使用</li>
	              <li>限制用户</li>
	            </ul>
	          </div>
	        </div>
        </div>
        <div className="subtjc">
	        <a href={'javascript:;'}>立即提交</a>
	        <a href={'javascript:;'}>重置</a>
        </div>
      </div>
    )
  }
}
export default AddUser;
