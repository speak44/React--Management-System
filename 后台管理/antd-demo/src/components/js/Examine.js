import React, {Component} from 'react';
import '../css/examine.css';

class Examine extends Component {
	constructor(){
	 	super();
	}
	render() {
    	return (
    		<div>待审核文章
    		   <div className="whead">
    		   		<div className="whead-min clearfixqxk">
    		   			<div className="wsearch clearfixqxk">
							<input type="text"
								placeholder="输入搜索内容"
							/>
							<a href={'javascript:;'}>查询</a>
    		   			</div>
    		   			<a href={'javascript:;'} className="addwenz">添加文章</a>
    		   			<a href={'javascript:;'} className="exavedwenz">审核文章</a>
    		   			<a href={'javascript:;'} className="batchdelwen">批量删除</a>    		 
    		   		</div>
    		   	</div>
				<table  className="wcont">
					<thead>
						<tr>
							<th>
								<span className="checkall"></span>
							</th>
							<th>文章列表</th>
							<th>发布人</th>
							<th>审核状态</th>
							<th>浏览权限</th>
							<th>是否展示</th>
							<th>发布时间</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><span className="checkall"></span></td>
							<td>自定义模块名称可以包含吗</td>
							<td>cccc</td>
							<td>审核通过</td>
							<td>开放浏览</td>
							<td>是</td>
							<td>2017-04-14</td>
							<td>
								<a href={'javascript:;'} className="w-del">
								<img
									src={require('../img/w-del.png')}
								/>
								</a>
								< a href={'javascript:;'}
									className="w-chouf"
								>
								<img
									src={require('../img/w-chouf.png')}
								/>
								</a>
							</td>
						</tr>							
					</tbody>
				</table>    		       			
    		</div>
    	)
   }
}
export default Examine;