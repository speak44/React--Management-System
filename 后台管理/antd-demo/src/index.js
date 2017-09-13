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
    console.log(user,pass)
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={()=>{
            return<Dl
                changebool={this.changebool}
              />
          }}/>
          <Route path="/home" render={()=>{
            if(this.state.bool){
              return <SiderDemo/>
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
