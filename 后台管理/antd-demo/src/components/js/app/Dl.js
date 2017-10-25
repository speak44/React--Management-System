import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import { Button } from 'antd';
import '../../css/add.css'
import '../../css/common.css'
class Dl extends Component {
  constructor(){
    super();
    this.state={
      user:'',
      pass:''
    }
  }
  //用户改变修改user值
  changeuser=(ev)=>{
    this.setState({
      user:ev.target.value
    })
  }
  //密码改变修改pass值
  changepass=(ev)=>{
    this.setState({
      pass:ev.target.value
    })
  }
  //登录按钮点击事件
  login=()=>{
    if (this.state.user===''||this.state.pass==='') {
      alert('请输入用户名和密码')
    }else{
      this.props.changebool(this.state.user,this.state.pass)
    }
  }
  render(){
    return (
      <div className='addlogin'>
        <h3>管理员登录</h3>
        <form action="" >
          <div className="userandpass">
              <span className='userlogo'></span>
              <input type="text"
                value={this.state.user}
                placeholder="管理员登录账号:admin"
                className="account"
                onChange={this.changeuser}
              />
          </div>
          <div className="userandpass">
              <span className='passlogo'></span>
              <input
                type="password"
                value={this.state.pass}
                placeholder={"管理员登录密码:"+this.props.arr[0].password}
                className="account"
                onChange={this.changepass}
              />
          </div>
          <div className="dengl">
            <div className='remem'>
              <a href={'javascript:;'} className='remem'>
                <i></i>
                <span>记住我</span>
            </a>
            </div>
            <div className='forget'>
              <a href={'javascript:;'} >
                忘记密码
              </a>
            </div>
          </div>
          <div className='andeng'
            onClick={this.login}>
            <Link to="/home">
              <a href={'javascript:;'}
                className='andeng'>
                  登录
              </a>
            </Link>
          </div>
		     </form>
         <p>或<a href={'javascript:;'}>现在就去注册</a></p>
      </div>
    )
  }
}
export default Dl;
