import React, { Component } from 'react';
import { Button } from 'antd';
import '../css/userinfo.css';

class Userinfo extends Component {
	render(){
		return(
			<div>用户数据
				<div>
					<input type="text"/>
					<a href={'javascript:;'}>查询</a>
					<a href={'javascript:;'}>添加用户</a>
					<a href={'javascript:;'}>批量删除</a>					
				</div>
				<table border="1">
					<thead>
						<tr>
							<th></th>
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
					<tr>
							<th></th>
							<th>小小</th>
							<th>121344@qq.com</th>
							<th>男</th>
							<th>高级会员</th>
							<th>正常使用</th>
							<th>2016-9-19</th>
							<th>删除</th>						
					</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
export default Userinfo;