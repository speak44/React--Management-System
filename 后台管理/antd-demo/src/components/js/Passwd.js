import React, { Component } from 'react';
import $ from 'jquery';
import '../css/common.css';
import '../css/passwd.css';

class Passwd extends Component {
	constructor(){
		super()
		this.state={
			oldcodeword:'',
			newcodeword:'',
			newyesword:''
		}
	}
	//旧密码输入内容事件
	changecoede=(ev)=>{
		this.setState({
			oldcodeword:ev.target.value.trim()
		})
	}
	//旧密码 失焦事件
	oldcode=(ev)=>{
			let arr=JSON.parse(localStorage.getItem('arr'))
			if (ev.target.value==arr[0].password) {
					$(ev.target).attr('class', 'ok');
					$(ev.target).next('em').attr('class', 'bgok');
			}else{
				$(ev.target).attr('class', 'error');
				$(ev.target).next('em').attr('class', 'bgerror');
			}
	}
	//新密码输入事件
	changenewcode=(ev)=>{
		this.setState({
			newcodeword:ev.target.value.trim()
		})
	}
	//新密码 失焦事件
	newcode=(ev)=>{
		let arr=JSON.parse(localStorage.getItem('arr'))
		if (this.state.newcodeword===arr[0].password) {
					alert('不能与旧密码一样')
					$(ev.target).attr('class', 'error');
					$(ev.target).next('em').attr('class', 'bgerror');
		}else if(this.state.newcodeword===''){
					alert('请输入内容')
					$(ev.target).attr('class', 'error');
					$(ev.target).next('em').attr('class', 'bgerror');
		}else if(/[\u4e00-\u9fa5]/g.test(this.state.newcodeword)){
					alert('不能为中文')
					$(ev.target).attr('class', 'error');
					$(ev.target).next('em').attr('class', 'bgerror');
		}else{
					$(ev.target).attr('class', 'ok');
					$(ev.target).next('em').attr('class', 'bgok');
		}
	}
	//请确认密码事件
	changeyesword=(ev)=>{
			this.setState({
				newyesword:ev.target.value.trim()
			})
	}
	bluryesword=(ev)=>{
		if (this.state.newcodeword===this.state.newyesword&&!(/[\u4e00-\u9fa5]/g.test(this.state.newyesword))) {
			$(ev.target).attr('class', 'ok');
			$(ev.target).next('em').attr('class', 'bgok');
		}else{
			$(ev.target).attr('class', 'error');
			$(ev.target).next('em').attr('class', 'bgerror');
		}
	}
	//重置按钮
	reppass=()=>{
		this.setState({
			oldcodeword:'',
			newcodeword:'',
			newyesword:''
		})
		$('.userpasswdcont').find('input').attr('class', '');
		$('.userpasswdcont').find('input').next('em').attr('class', '');
	}
	//提交按钮
	subpass=()=>{
		if ($('.userpasswdcont').find('.ok').length==3) {
			this.props.paschange(this.state.newyesword)
		}else{
		alert('请填写正确内容')
		}
	}
	render(){
		return(
			<div>
				<div className="abues userpasswdcont">
					<div className="usna clearfixqxk">
						<span>用户名</span>
				         <input
				            type="text"
				            value=""
				            placeholder="cici"
				            readOnly="true"
				         />
					</div>
					<div className="clearfixqxk newpas">
						<span>旧密码</span>
						<input
				            type="text"
				            value={this.state.oldcodeword}
				            placeholder="请输入旧密码"
										onChange={this.changecoede}
										onBlur={this.oldcode}
						/>
						<em></em>
					</div>
					<div className="clearfixqxk newpas">
						<span>新密码</span>
						<input
				            // type="password"
				            type="text"
				            value={this.state.newcodeword}
										onChange={this.changenewcode}
				            placeholder="请输入新密码"
										onBlur={this.newcode}
						/>
						<em></em>
					</div>
					<div className="clearfixqxk newpas">
						<span>确认密码</span>
						<input
				            // type="password"
				            type="text"
										value={this.state.newyesword}
				            placeholder="请确认密码"
										onChange={this.changeyesword}
										onBlur={this.bluryesword}
						/>
						<em></em>
					</div>
				</div>
				<div className="subtjc">
	        		<a href={'javascript:;'}
								onClick={this.subpass}
								>立即提交</a>
	        		<a href={'javascript:;'}
								onClick={this.reppass}
								>重置</a>
        </div>
			</div>
		)
	}
}
export default Passwd;
