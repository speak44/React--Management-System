import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiderDemo from './components/SiderDemo';
import Dl from './components/js/app/Dl';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
const history = createHistory()
class Home extends Component {
  constructor(){
    super()
    this.state={
      bool:false,
      arronoff:false,
      arr:[
        {
          username:'admin',
          password:'admin'
        }
      ]
    }
  }
  //存储localStorage 登录信息
  componentDidMount(){
    if(JSON.parse(localStorage.getItem('arronoff'))){
      let newarr= JSON.parse(localStorage.getItem('arr'))
      this.setState({
        arr:newarr
      })
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
        localStorage.setItem('arronoff',JSON.stringify(false))
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
      arr:arr2,
      bool:false,
      arronoff:true
    })
    localStorage.setItem('arr',JSON.stringify(arr2))
    localStorage.setItem('arronoff',JSON.stringify(true))
    alert('提交成功')
    history.push('/')
  }

  render(){
		return(
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
                // arr={this.state.arr}
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
