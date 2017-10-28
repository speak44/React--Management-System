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
								<div className="wenazuhe">
									<a href={'javascript:;'} className="w-del">
									<img
										src={require('../img/w-del.png')}
									/>
									</a>
									<a href={'javascript:;'} className="w-chouf">
									<img
										src={require('../img/w-chouf.png')}
									/>
									</a>
									<a href={'javascript:;'} className="w-chak">
										<img src={require('../img/w-bianj.png')}></img>
										<div className="ViewArticleList">
											<div className="ViewArticleListmask"></div>
											<div className="ViewArticleListcont">
												<em></em>
												<div className="viewarttitle clearfixqxk">
														<span>文件标题：</span>
														<p>css发展史</p>
												</div>
												<div className="viewarwenzuo clearfixqxk">
														<div className=" writer clearfixqxk">
															<span>作&nbsp;&nbsp;&nbsp;者：</span>
															<p>陈思</p>
														</div>
														<div className="release clearfixqxk">
															<span>发布时间：</span>
															<p>2017-10-28</p>
														</div>
														<div className="permission clearfixqxk">
															<span>浏览权限：</span>
															<p>开放浏览</p>
														</div>
														<div>
															<span>审核状态：</span>
															<p>未审核</p>
														</div>
												</div>
													<textarea>
	CSS发展史
	CSS（Cascading Style Sheets，层叠样式表）是一种将表示样式应用到标记的系统。CSS以设计、改变其HTML页面的样式而知名，并使用于Web和其他媒介，如XML文档中。1996年12月W3C推出了CSS规范的第一个版本，1998年W3C发布了CSS的第二个版本即CSS2.0,2001年5月W3C开始进行CSS3标准的制定，到目前为止该标准还没有最终定稿。
	CSS1.0
	选择器：要使用CSS对HTML页面中的元素实现一对一，一对多或者多对一的控制，就需要用到CSS选择器。选择器大致分为派生选择器、ID选择器和类选择器，用来定义希望应用样式的HTML元素或者标签。
	样式属性：该属性主要包括Font字体、Text文本、Background背景、Position定位、Dimensions尺寸、Layout布局、Margin外边框、Border边框、Padding内边框、List列表、Table表格和Scrollbar滚动条等，用于定义网页的一些样式变化。
	伪类属性：主要定义了针对描述对象a的link、hover、active、visited和针对节点的first-letter、first-child、first-line等几个伪类属性。
	保存方式：用户可以直接存储在HTML网页中，也可以将CSS样式代码存储为独立的样式表文件。
													</textarea>
											</div>
										</div>
									</a>
							</div>
							</td>
						</tr>
					</tbody>
				</table>
    		</div>
    	)
   }
}
export default Examine;
