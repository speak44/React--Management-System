import React, { Component } from 'react';
import { Button } from 'antd';
import '../css/userinfo.css';
import '../css/common.css';
//userinfo tbody 内容
class Tbodycont extends Component{
	render(){
		  let {name,email,sex,vip,cond,time}=this.props;
		return(
			<tr>
				<td><span className="checkall"></span></td>
				<td>{name}</td>
				<td>{email}</td>
				<td>{sex}</td>
				<td>{vip}</td>
				<td>{cond}</td>
				<td>{time}</td>
				<td><img src={require('../img/tabifdel.png')}/></td>
			</tr>
		)
	}
}
//userinfo组件
class Userinfo extends Component {
	render(){
		let initArr = this.props.aduser;
		let list = initArr.map((e,i) => {
			let data={
				key:i,
				name:e.name,
				email:e.email,
				sex:e.sex,
				vip:e.vip,
				cond:e.cond,
				time:e.time
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
					<a href={'javascript:;'}>添加用户</a>
					<a href={'javascript:;'}>批量删除</a>
				</div>
				<table  className="uifotab">
					<thead>
						<tr>
							<th><span className="checkall"></span></th>
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
