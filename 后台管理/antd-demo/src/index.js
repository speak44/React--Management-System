import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiderDemo from './components/SiderDemo';
import Dl from './components/js/app/Dl';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
class Home extends Component {
  constructor(){
    super()
    this.state={
      bool:false,
      arr:[
        {
          username:'admin',
          password:'admin'
        }
      ]
    }
  }
  //判断登录进入home
  changebool=(user,pass)=>{
    let {arr}=this.state;
    let arr2=Object.assign(arr)
    arr2.forEach((e,i)=>{
      if(e.username===user&&e.password===pass){
        this.setState({
          bool:true
        })
      }else{
        alert('管理员用户名和密码不正确')
        this.setState({
          bool:false
        })
      }
    })
  }
  //修改密码内容
  newpas=(newpascont)=>{
    let {arr}=this.state;
    let arr2=Object.assign(arr)
    arr2[0].password=newpascont;
    this.setState({
      arr:arr2
    })
    alert('提交成功')
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={()=>{
            return<Dl
                arr={this.state.arr}
                changebool={this.changebool}
              />
          }}/>
          <Route path="/home" render={()=>{
            if(this.state.bool){
              return <SiderDemo
                arr={this.state.arr}
                newpas={this.newpas}
              />
            }else{
              return <Redirect to="/" />
            }
          }}/>
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
