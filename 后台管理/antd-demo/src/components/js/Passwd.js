import React, { Component } from 'react';
import '../css/common.css';
import '../css/passwd.css';

class Passwd extends Component {
	render(){
		return(
			<div>
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
					<div className="clearfixqxk newpas">
						<span>旧密码</span>
						<input 
				            type="text"
				            value=""
				            placeholder="请输入旧密码"	
						/>
					</div>
					<div className="clearfixqxk newpas">
						<span>新密码</span>
						<input 
				            type="text"
				            value=""
				            placeholder="请输入新密码"	
						/>
					</div>
					<div className="clearfixqxk newpas">
						<span>确认密码</span>
						<input 
				            type="text"
				            value=""
				            placeholder="请确认密码"	
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
export default Passwd;