import React, {Component} from 'react';
import { Pagination } from 'antd';
import '../css/article.css';
import '../css/examine.css';
import wchouf from '../img/w-chouf.png';
import wchouf2 from '../img/w-chouf2.png';
//子组件
class  ArticleChildComponents extends Component{
	constructor(){
		super();
		this.state={
				disshow:'none',
				ctrl:wchouf,
				ctrlonoff:true
		}
	}
	//点击查看按钮
	clicklookover=()=>{
		this.setState({
				disshow:'block'
		})
	}
	//点击关闭查看按钮  x
	clonse=()=>{
		this.setState({
				disshow:'none'
		})
	}
	//点击收藏按钮
	Favorites=()=>{
		if (this.state.ctrlonoff) {
			this.setState({
					ctrl:wchouf2,
					ctrlonoff:false
			})
		}else{
			this.setState({
					ctrl:wchouf,
					ctrlonoff:true
			})
		}
	}
	render(){
		let {title,writer,audit,authoritymanagement,exhibition,time,cheched,text}=this.props;
		let sclass=exhibition==='是'?'show':'onshow'
		return(
				<tr>
					<td><span className="checkall"></span></td>
					<td>{title}</td>
					<td>{writer}</td>
					<td>{audit}</td>
					<td>{authoritymanagement}</td>
					<td className="Presentation">
						<div className={sclass}></div>
					</td>
					<td>{time}</td>
					<td>
						<div className="wenazuhe">
							<a href={'javascript:;'} className="w-del">
							<img
								src={require('../img/w-del.png')}
							/>
							</a>
							<a href={'javascript:;'}
								className="w-chouf"
								onClick={this.Favorites}
								>
							<img
								src={this.state.ctrl}
							/>
							</a>
							<a href={'javascript:;'} className="w-chak">
								<div
									onClick={this.clicklookover}
									>
										<img src={require('../img/w-bianj.png')}></img>
								</div>
								<div className="ViewArticleList" style={{display:this.state.disshow}}>
									<div className="ViewArticleListmask"></div>
									<div className="ViewArticleListcont">
										<em
											onClick={
												this.clonse
											}></em>
										<div className="viewarttitle clearfixqxk">
												<span>文件标题：</span>
												<p>{title}</p>
										</div>
										<div className="viewarwenzuo clearfixqxk">
												<div className=" writer clearfixqxk">
													<span>作&nbsp;&nbsp;&nbsp;者：</span>
													<p>{writer}</p>
												</div>
												<div className="release clearfixqxk">
													<span>发布时间：</span>
													<p >{time}</p>
												</div>
												<div className="permission clearfixqxk">
													<span>浏览权限：</span>
													<p>{authoritymanagement}</p>
												</div>
												<div>
													<span>审核状态：</span>
													<p>{audit}</p>
												</div>
										</div>
											<textarea>
												{text}
											</textarea>
									</div>
								</div>
							</a>
						</div>
						<div>

						</div>
					</td>
				</tr>
		)
	}
}

//父组件
class Article extends Component {
	constructor(){
	 	super();
	}
	render() {
		let articlearr=this.props.articlearr;
		let list = articlearr.map((e,i) => {
			let data={
				id:i,
				key:i,
				title:e.title,
				writer:e.writer,
				audit:e.audit,
				authoritymanagement:e.authoritymanagement,
				exhibition:e.exhibition,
				time:e.time,
				cheched:e.cheched,
				text:e.text
			}
				return <ArticleChildComponents {...data} />
		});
    	return (
    		<div>文章列表
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
							{list}
					</tbody>
				</table>
				<Pagination defaultCurrent={1} total={50} />
    		</div>
    	)
   	}
}
export default Article;
