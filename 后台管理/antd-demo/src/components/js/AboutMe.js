import React, { Component } from 'react';
import { DatePicker } from 'antd';
import HomeAdd from './HomeAdd';
import '../css/common.css';
import '../css/aboutme.css';
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
			real:'',
			man:1,
			wom:2,
			secr:3,
			fix:1,
			phone:'',
			phonoff:false,
			hobonoff:false
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
	//爱好
	clickhob=()=>{
			this.setState({
				hobonoff:true
			})
	}
	render(){
		let sclass=this.state.hobonoff?'active':'';
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
							<div className="clearfixqxk"
									onClick={this.clickhob}
								>
								<span>Javascript</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>HTML5</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>CSS3</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>PHP</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>.net</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>ASP</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>C#</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>Angular</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>VUE</span>
								<i className={sclass}></i>
							</div>
							<div className="clearfixqxk">
								<span>XML</span>
								<i className={sclass}></i>
							</div>
						</div>
					</div>
					<div className="clearfixqxk">
						<span>邮箱</span>
						<input
				            type="text"
				            value=""
				            placeholder="请输入邮箱"
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
