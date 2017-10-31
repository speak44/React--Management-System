import React, { Component } from 'react';
import { Button } from 'antd';
import '../css/adduser.css';
class AddUser extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      emonoff:true,
      sex:'',
      vip:'注册会员',
      cond:'正常使用',
      time:'',
      bgc:'adseact',
      colorid:1,
      one:1,
      two:2,
      three:3,
      dis:'none',
      onofvip:true,
      huiz:1,
      huih1:1,
      huih2:2,
      huih3:3,
      huih4:4,
      conddis:'none',
      transvip:'',
      zhuconoff:true,
      zhuconz:1,
      zt1:1,
      zt2:2,
      transzhuc:''
    }
  }
  //改变用户名
  changename=(ev)=>{
    this.setState({
      name:ev.target.value
    })
  }
  //邮箱
  changeemail=(ev)=>{
      this.setState({
        email:ev.target.value
      })
  }
  //邮箱失焦事件做正则匹配
  blurem=(ev)=>{
    let re=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!re.test(ev.target.value)) {
        alert('邮箱输入错误，请重新输入')
        this.setState({
          emonoff:false
        })
    }else{
      this.setState({
        emonoff:true
      })
    }
  }
  //改变性别
  changesev=(ev)=>{
    this.setState({
      colorid:ev.target.id,
      sex:ev.target.getAttribute('content')
    })
  }
  //会员列表的显示情况
  clickvip=()=>{
    if (this.state.onofvip) {
      this.setState({
        dis:'block',
        onofvip:false,
        transvip:'rotate(180deg)'
      })
      //i标签的旋转缺少运动！！！！！！！！！！！！
    }else{
      this.setState({
        dis:'none',
        onofvip:true,
        transvip:''
      })
    }
  }
  //修改会员等级
  clyuy=(ev)=>{
    this.setState({
      huiz:ev.target.getAttribute('content'),
      vip:ev.target.innerHTML
    })
  }
  //点击修改会员状态
  clickcond=()=>{
    if(this.state.zhuconoff){
      this.setState({
        conddis:'block',
        zhuconoff:false,
        transzhuc:'rotate(180deg)'
      })
    }else{
      this.setState({
        conddis:'none',
        zhuconoff:true,
        transzhuc:''
      })
    }
  }
  //点击修改状态名称
clickzhtb=(ev)=>{
  this.setState({
    zhuconz:ev.target.getAttribute('content'),
    cond:ev.target.innerHTML,
    conddis:'none'
  })
}
//提交按钮点击事件
subm=()=>{
    if(this.state.name&&this.state.email&&this.state.emonoff){
        let json={
          name:this.state.name,
          email:this.state.email,
          sex:this.state.sex,
          vip:this.state.vip,
          cond:this.state.cond,
          time:new Date().toLocaleString( )
        }
        this.props.changedata(json)
        this.setState({
          name:'',
          email:'',
          emonoff:true,
          sex:'',
          vip:'注册会员',
          cond:'正常使用',
          time:'',
          colorid:1,
          cheched:false
        })
        alert('提交成功')
    }else{
      alert('请填写正确内容')
    }
}
//重置按钮点击
reset=()=>{
  this.setState({
    name:'',
    email:'',
    emonoff:true,
    sex:'',
    vip:'注册会员',
    cond:'正常使用',
    time:'',
    colorid:1
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
            value={this.state.email}
            placeholder="请输入邮箱"
            onChange={this.changeemail}
            onBlur={this.blurem}
          />
        </div>
        <div className="addsex clearfixqxk">
          <span>性别</span>
          <div className="adsexxz clearfixqxk">
            <a href={'javascript:;'}
               className="clearfixqxk"
              onClick={this.changesev}
              id="1"
              content="男"
               >
              <i className={this.state.one==this.state.colorid?"adseact":""}
              id="1"
              content="男"
              ></i>
              男
            </a>
            <a href={'javascript:;'}
              className="clearfixqxk"
              onClick={this.changesev}
              id="2"
              content="女"
              >
              <i
                className={this.state.two==this.state.colorid?"adseact":""}
                id="2"
                content="女"
                ></i>
              女
            </a>
            <a href={'javascript:;'}
              className="clearfixqxk"
              onClick={this.changesev}
              id="3"
              content="保密"
              >
              <i
                className={this.state.three==this.state.colorid?"adseact":""}
                id="3"
                content="保密"
                ></i>
              保密
            </a>
          </div>
        </div>
        <div className="clearfixqxk">
	        <div className="gradevip clearfixqxk">
	          <span>会员等级</span>
	          <div className="grandhy"
              onClick={this.clickvip}
              >
	            <div className="zhucevip" >
	              <em className="zhuccont">
	                {this.state.vip}
	              </em>
	              <i style={{transform:this.state.transvip}}></i>
	            </div>
	            <ul
                style={{display:this.state.dis}}
                onClick={this.clyuy}
                >
	              <li
                  className={this.state.huih1==this.state.huiz?"grangb":""}
                  content="1"
                  >注册会员</li>
	              <li
                  className={this.state.huih2==this.state.huiz?"grangb":""}
                  content="2"
                  >中级会员</li>
	              <li
                  className={this.state.huih3==this.state.huiz?"grangb":""}
                  content="3"
                  >高级会员</li>
	              <li
                  className={this.state.huih4==this.state.huiz?"grangb":""}
                  content="4"
                  >超级会员</li>
	            </ul>
	          </div>
	        </div>
	        <div className="gradevip clearfixqxk">
	          <span>会员状态</span>
	          <div className="grandhy"
              onClick={this.clickcond}
              >
	          <div className="zhucevip">
	            <em  className="zhuccont">
	              {this.state.cond}
	            </em>
	            <i style={{transform:this.state.transzhuc}}></i>
	          </div>
	            <ul
                style={{display:this.state.conddis}}
                onClick={this.clickzhtb}
                >
	              <li                        className={this.state.zhuconz==this.state.zt1?"grangb":""}
                  content="1"
                  >正常使用</li>
	              <li
                  className={this.state.zhuconz==this.state.zt2?"grangb":""}
                  content="2"
                  >限制用户</li>
	            </ul>
	          </div>
	        </div>
        </div>
        <div className="subtjc">
	        <a href={'javascript:;'}
            onClick={this.subm}
            >立即提交</a>
	        <a href={'javascript:;'}
            onClick={this.reset}
            >重置</a>
        </div>
      </div>
    )
  }
}
export default AddUser;
