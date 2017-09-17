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
	render(){
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
				            value=""
				            placeholder="请输入真实姓名"	
						/>
					</div>
			        <div className="addsex clearfixqxk">
			          <span>性别</span>
			          <div className="adsexxz clearfixqxk">
			            <a href={'javascript:;'} className="clearfixqxk">
			              <i className="adseact"></i>
			              男
			            </a>
			            <a href={'javascript:;'} className="clearfixqxk">
			              <i></i>
			              女
			            </a>
			            <a href={'javascript:;'} className="clearfixqxk">
			              <i></i>
			              保密
			            </a>
			          </div>
			        </div>
					<div className="clearfixqxk">
						<span>手机号码</span>
						<input 
				            type="text"
				            value=""
				            placeholder="请输入手机号码"	
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
							<div className="clearfixqxk ">
								<span>Javascript</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>HTML5</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>CSS3</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>PHP</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>.net</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>ASP</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>C#</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>Angular</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>VUE</span>
								<i></i>
							</div>
							<div className="clearfixqxk">
								<span>XML</span>
								<i></i>
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