import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import { Button } from 'antd';
import '../css/userinfo.css';
import '../css/common.css';
//删除后全选框的改变 未实现的功能！！！！ <已完成>
//搜查询的功能 未实现！！！！！！！！！
//userinfo tbody 内容
class Tbodycont extends Component{
	//删除内容
	remove=()=>{
		this.props.remove(this.props.id)
	}
	//选中单个画√，改变数组中cheched的布尔值为true
	clickright=()=>{
		this.props.clickright(this.props.id)
	}
	render(){
		  let {name,email,sex,vip,cond,time,cheched}=this.props;
			    let sclass=cheched?'checktow':'checkall';
		return(
			<tr>
				<td><span
					className={sclass}
					onClick={this.clickright}
					></span></td>
				<td>{name}</td>
				<td>{email}</td>
				<td>{sex}</td>
				<td>{vip}</td>
				<td>{cond}</td>
				<td>{time}</td>
				<td><img
							src={require('../img/tabifdel.png')}
						onClick={this.remove}
						/>
				</td>
			</tr>
		)
	}
}
//userinfo组件
class Userinfo extends Component {
	//all全选按钮点击事件
	allclick=()=>{
		this.props.allclick()
	}
//批量删除
	alldel=()=>{
		this.props.alldel()
	}
	render(){
		let allclass=this.props.allonof?'checktow':'checkall';
		let initArr = this.props.aduser;
		let list = initArr.map((e,i) => {
			let data={
				id:i,
				key:i,
				name:e.name,
				email:e.email,
				sex:e.sex,
				vip:e.vip,
				cond:e.cond,
				time:e.time,
				remove:this.props.remove,
				cheched:e.cheched,
				clickright:this.props.clickright,
				allclick:this.props.allclick
			}
				return <Tbodycont {...data} />

		});

		return(
			<div className="uifo">
				<div className="ufo-head">
					<input type="text"
						placeholder="输入搜索内容"
					/>
					<a href={'javascript:;'}>查询</a>
						<Link to="/home/AddUser">
						添加用户
					</Link>
					<a
						href={'javascript:;'}
						onClick={this.alldel}
						>批量删除</a>
				</div>
				<table  className="uifotab">
					<thead>
						<tr>
							<th>
								<span
									className={allclass}
									onClick={this.allclick}
									style={{'background':require('../img/checktwo.png')}}
								></span>
							</th>
							<th>登录名</th>
							<th>邮箱</th>
							<th>性别</th>
							<th>会员等级</th>
							<th>会员状态</th>
							<th>最后登录时间</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
							{list}
					</tbody>
				</table>
			</div>
		)
	}
}
export default Userinfo;
