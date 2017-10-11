import React, { Component } from 'react';
import { DatePicker } from 'antd';
import HomeAdd from './HomeAdd';
import '../css/common.css';
import '../css/aboutme.css';
//子组件内容
class Hobbycont extends Component{
	//修改爱好
	hobclick=()=>{
		this.props.hobclick(this.props.id)
	}
	render(){
		let {hobname,hobonoff}=this.props;
		let sclass=hobonoff?'active':'';
		return(
				<div
					className="clearfixqxk"
					onClick={this.hobclick}
					>
					<span>{hobname}</span>
					<i
						className={sclass}
						></i>
				</div>
		)
	}
}
//父组件内容
const { RangePicker } = DatePicker;
	function onChange(value, dateString) {
	  console.log('Selected Time: ', value);
	  console.log('Formatted Selected Time: ', dateString);
	}

	function onOk(value) {
	  console.log('onOk: ', value);
	}
class AboutMe extends Component{
	constructor(){
		super()
		this.state={
			hobdata:[
				{hobname:'Javascript',hobonoff:false},
				{hobname:'HTML5',hobonoff:false},
				{hobname:'CSS3',hobonoff:false},
				{hobname:'PHP',hobonoff:false},
				{hobname:'.net',hobonoff:false},
				{hobname:'ASP',hobonoff:false},
				{hobname:'C#',hobonoff:false},
				{hobname:'Angular',hobonoff:false},
				{hobname:'VUE',hobonoff:false},
				{hobname:'XML',hobonoff:false}
			],
			real:'',
			man:1,
			wom:2,
			secr:3,
			fix:1,
			phone:'',
			email:'',
			phonoff:false,
			emonoff:true
		}
	}
	//改变真实姓名
	cagereal=(ev)=>{
		this.setState({
			real:ev.target.value
		})
	}
	//性别选择
	clicksex=(ev)=>{
		this.setState({
			fix:ev.target.getAttribute("content")
		})
	}
	//手机号修改
	clickphone=(ev)=>{
		// console.log(ev.target.value)
		this.setState({
			phone:ev.target.value
		})

	}
	//手机号填入失焦事件
	blurphone=(ev)=>{
		let regexp=/^((\d3)|(\d{3}\-))?13[456789]\d{8}|15[89]\d{8}/;
		if(regexp.test(ev.target.value)){
				this.setState({
					phonoff:true
				})
		}else{
			alert('请输入正确的手机号码')
		}
	}
	//爱好点击事件
	hobclick=(newid)=>{
		let {hobdata}=this.state
    let hobdata2=Object.assign(hobdata)
    hobdata2.forEach((e,i)=>{
      if(i==newid){
          e.hobonoff=!e.hobonoff
      }
    })
    this.setState({
      hobdata:hobdata2
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
	render(){
		let newhobdata=this.state.hobdata;
		let list=newhobdata.map((e,i)=>{
			let data={
				key:i,
				id:i,
				hobname:e.hobname,
				hobonoff:e.hobonoff,
				hobclick:this.hobclick
			}
			return <Hobbycont {...data}/>
		})
		return(
			<div>个人资料
				<div className="abues">
					<div className="usna clearfixqxk">
						<span>用户名</span>
				         <input
				            type="text"
				            value=""
				            placeholder="cici"
				            readOnly="true"
				         />
					</div>
					<div className="usna clearfixqxk">
						<span>用户组</span>
						<input
				            type="text"
				            value=""
				            placeholder="管理员"
				            readOnly="true"
						/>
					</div>
					<div className="clearfixqxk">
						<span>真实姓名</span>
						<input
				            type="text"
				            value={this.state.real}
				            placeholder="请输入真实姓名"
										onChange={this.cagereal}
						/>
					</div>
			        <div className="addsex clearfixqxk">
			          <span>性别</span>
			          <div className="adsexxz clearfixqxk">
			            <a href={'javascript:;'}
										className="clearfixqxk"
										onClick={this.clicksex}
										content="1"
										>
			              <i className={this.state.man==this.state.fix?'adseact':''}
										content="1"
										></i>
			              男
			            </a>
			            <a href={'javascript:;'}
										className="clearfixqxk"
										onClick={this.clicksex}
										content="2"
										>
			              <i
											className={this.state.wom==this.state.fix?'adseact':''}
										content="2"
											></i>
			              女
			            </a>
			            <a href={'javascript:;'}
										className="clearfixqxk"
										onClick={this.clicksex}
										content="3"
										>
			              <i
											className={this.state.secr==this.state.fix?'adseact':''}
										content="3"
											></i>
			              保密
			            </a>
			          </div>
			        </div>
					<div className="clearfixqxk">
						<span>手机号码</span>
						<input
				            type="text"
				            value={this.state.phone}
				            placeholder="请输入手机号码"
										onChange={this.clickphone}
										onBlur={this.blurphone}
						/>
					</div>
					<div className=" birth clearfixqxk">
						<span>出生日期</span>
					    <DatePicker
					      showTime
					      format="YYYY-MM-DD HH:mm:ss"
					      placeholder="Select Time"
					      onChange={onChange}
					      onOk={onOk}

					    />
					</div>
					<div className="clearfixqxk">
						<span className="city">家庭住址</span>
						<div>
						<HomeAdd/>
						</div>
					</div>
					<div className="clearfixqxk">
						<span className="hobsp">兴趣爱好</span>
						<div className="clearfixqxk hobbies">
							{list}
						</div>
					</div>
					<div className="clearfixqxk">
						<span>邮箱</span>
						<input
							type="text"
	            value={this.state.email}
	            placeholder="请输入邮箱"
	            onChange={this.changeemail}
	            onBlur={this.blurem}
						/>
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
export default AboutMe;
