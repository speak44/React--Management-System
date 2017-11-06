import React, {Component} from 'react';
import '../css/examine.css';
import wchouf from '../img/w-chouf.png';
import wchouf2 from '../img/w-chouf2.png';
//子组件
class Exacont extends Component{
	constructor(){
		super();
		this.state={
				disshow:'none'
		}
	}
	//点击查看按钮
	clicklookoverExacont=()=>{
		this.setState({
				disshow:'block'
		})
	}
	//点击关闭查看按钮  x
	clonseExacont=()=>{
		this.setState({
				disshow:'none'
		})
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
		return (
			<tr>
				<td><span
					onClick={this.articleclickrightExacont}
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
						onClick={this.clickyerornoExacont}
						></div>
				</td>
				<td>{time}</td>
				<td>
					<div className="wenazuhe">
						<a href={'javascript:;'}
							className="w-del"
							onClick={this.artremoveoneExacont}
							>
						<img
							src={require('../img/w-del.png')}
						/>
						</a>
						<a href={'javascript:;'}
							className="w-chouf"
							onClick={this.FavoritesExacont}
							>
						<img
							src={collectimg}
						/>
						</a>
						<a href={'javascript:;'} className="w-chak">
							<div
								onClick={this.clicklookoverExacont}
								>
									<img src={require('../img/w-bianj.png')}></img>
							</div>
							<div className="ViewArticleList" style={{display:this.state.disshow}}>
								<div className="ViewArticleListmask"></div>
								<div className="ViewArticleListcont">
									<em
										onClick={this.clonseExacont}
										></em>
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
class Examine extends Component {
	constructor(){
	 	super();
	}
	render() {
		let articlearr=JSON.parse(localStorage.getItem('articlearr'));
		if(!articlearr){
				return <div></div>
		}
		let articlearr2=articlearr.filter((e)=>{
			return !e.audit
		})
		// localStorage.setItem('Examine',JSON.stringify(articlearr2));
		let list=articlearr2.map((e,i) => {
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
				collect:e.collect
			}
			return <Exacont {...data}/>
		})
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
							{list}
					</tbody>
				</table>
    		</div>
    	)
   }
}
export default Examine;
