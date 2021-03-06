import React, {Component} from 'react';
import { Pagination } from 'antd';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import '../css/common.css';
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
	//文章-点击收藏按钮
	Favorites=()=>{
		this.props.collectclick(this.props.id)
	}
	//选中单个画√，改变数组中cheched的布尔值为true
	 articleclickright=()=>{
		this.props. articleclickright(this.props.id)
	}
	//单个文件删除按钮
	artremoveone=()=>{
		this.props.artremoveone(this.props.id)
	}
	//点击改变是否展示
	clickyerorno=()=>{
		this.props.clickyerorno(this.props.id)
	}
	render(){
		let {title,writer,audit,authoritymanagement,exhibition,time,cheched,text,collect}=this.props;
		//是否展示引用的class名
		let sclass=exhibition?'show':'onshow'
		//收藏点击更换图片
		let collectimg=collect?wchouf2:wchouf;
		//选中更换class名
		let atrright=cheched?'checktow':'checkall';
		let audittext=audit?'审核通过':'待审核';
		return(
				<tr>
					<td><span
						onClick={this.articleclickright}
						className={atrright}
						></span>
					</td>
					<td>{title}</td>
					<td>{writer}</td>
					<td>{audittext}</td>
					<td>{authoritymanagement}</td>
					<td className="Presentation">
						<div
							className={sclass}
							onClick={this.clickyerorno}
							></div>
					</td>
					<td>{time}</td>
					<td>
						<div className="wenazuhe">
							<a href={'javascript:;'}
								className="w-del"
								onClick={this.artremoveone}
								>
							<img
								src={require('../img/w-del.png')}
							/>
							</a>
							<a href={'javascript:;'}
								className="w-chouf"
								onClick={this.Favorites}
								>
							<img
								src={collectimg}
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
													<p>{audittext}</p>
												</div>
										</div>
											<textarea value={text}>
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
	//选中全选功能
	artrightall=()=>{
		this.props.artrightall()
	}
	//批量删除按钮
	artdelall=()=>{
		this.props.artdelall()
	}
	render() {
		let articlearr=JSON.parse(localStorage.getItem('articlearr'));
		let allclass=this.props.wenallonoff?'checktow':'checkall';
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
				text:e.text,
				//收藏
				collect:e.collect,
				//全选按钮的class改变
				wenallonoff:this.props.wenallonoff,
				//文章收藏-点击按钮
				collectclick:this.props.collectclick,
				//文章点击选中事件
				articleclickright:this.props.articleclickright,
				//文章全选按钮点击事件
				artrightall:this.props.artrightall,
				//单个删除按钮
				artremoveone:this.props.artremoveone,
				//批量删除按钮
				artdelall:this.props.artdelall,
				//点击改变是否展示
				clickyerorno:this.props.clickyerorno
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
								<Link to="/home/Addarticle"
											className="addwenz">
											添加文章
								</Link>
    		   			<a href={'javascript:;'}
									className="batchdelwen"
									onClick={this.artdelall}
									>批量删除</a>
    		   		</div>
    		   	</div>
				<table  className="wcont">
					<thead>
						<tr>
							<th>
								<span
									className={allclass}
									onClick={this.artrightall}
									></span>
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
