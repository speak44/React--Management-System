import React, {Component} from 'react';
import LzEditor from 'react-lz-editor';
import {DatePicker, Button, message} from 'antd';
import '../css/editor.css';
import '../css/addarticle.css';
//子组件引入
class Custom extends Component {
	constructor(){
		super();
	}
	//修改自定义属性
	indclick=()=>{
		this.props.indclick(this.props.id)
	}
	render(){
		let {indexname,indonoff}=this.props;
		let sclass=indonoff?'active':'';
		return(
			<div
				className="clearfixqxk"
				onClick={this.indclick}
				>
				<span>{indexname}</span>
				<i
					className={sclass}
					></i>
			</div>
		)
	}
}
//父组件引入
const { RangePicker } = DatePicker;
	function onChange(value, dateString) {
	  console.log('Selected Time: ', value);
	  console.log('Formatted Selected Time: ', dateString);
	}
	function onOk(value) {
	  console.log('onOk: ', value);
	}
class Addarticle extends Component {
   constructor(props) {
      super(props);
      this.state = {
         responseList: [],
         txt: '',
				 indexcus:[
					 {indexname:'推荐',indonoff:false},
					 {indexname:'审核',indonoff:false},
					 {indexname:'展示',indonoff:false}
				 ],
				 conddis:'none',
				 zhuconoff:true,
				 transzhuc:'',
				 cond:'开放浏览',
				 transzhuc:'',
				 conddis:'none',
				 zhuconz:1,
				 zt1:1,
				 zt2:2
      }
   }
   receiveMarkdown = (content) => {
      this.setState({txt: content});
   }
	 //自定义属性点击事件
	 indclick=(newid)=>{
		 let {indexcus}=this.state
			let indexcus2=Object.assign(indexcus)
			indexcus2.forEach((e,i)=>{
				if(i==newid){
						e.indonoff=!e.indonoff
				}
			})
			this.setState({
				indexcus:indexcus2
			})
	 }
	 //点击修改浏览权限
	 clickcond=()=>{
		 if(this.state.zhuconoff){
			 this.setState({
				 conddis:'block',
				 zhuconoff:false,
				 transzhuc:'rotate(180deg)'
			 })
		 }else{
			 this.setState({
				 conddis:'none',
				 zhuconoff:true,
				 transzhuc:''
			 })
		 }
	 }
	 //点击修改状态名称
 clickzhtb=(ev)=>{
	 this.setState({
		 zhuconz:ev.target.getAttribute('content'),
		 cond:ev.target.innerHTML,
		 conddis:'none'
	 })
 }
	render() {
			let newindexcus=this.state.indexcus;
			let list=newindexcus.map((e,i)=>{
				let data={
					key:i,
					id:i,
					indexname:e.indexname,
					indonoff:e.indonoff,
					indclick:this.indclick
				}
				return <Custom {...data}/>
			})
    	let policy = "";
    	const uploadProps = {
         action: "http://v0.api.upyun.com/devopee",
         onChange: this.onChange,
         listType: 'picture',
         fileList: this.state.responseList,
         data: (file) => {},
         multiple: true,
         beforeUpload: this.beforeUpload,
         showUploadList: true
    	}
    	return (
    		<div>
	    		<div className="adus adcle">添加文章
	    			<div className="appuser clearfixqxk">
	    				<span>文件标题</span>
						<input type="text"
							placeholder="请输入文件标题"
						/>
	    			</div>
	    			<div className="clearfixqxk">
	    				<div className="clearfixqxk indeshx">
	    					<span>自定义属性</span>
								<div className="hobbies clearfixqxk newindex">
									{list}
								</div>
	    				</div>
	    				<div className="author">
	    					<span>文章作者</span>
							<input type="text"
								placeholder="请输入作者的名称"
							/>
	    				</div>
	    				<div className="retime clearfixqxk">
	    					<span>发布时间</span>
	 					    <DatePicker
						      showTime
						      format="YYYY-MM-DD HH:mm:ss"
						      placeholder="Select Time"
						      onChange={onChange}
						      onOk={onOk}
						    />
	    				</div>
	    			</div>
						<div className="gradevip clearfixqxk adbpwbox">
		          <span>浏览权限</span>
		          <div className="grandhy addbrowse"
	              onClick={this.clickcond}
	              >
		          <div className="zhucevip">
		            <em  className="zhuccont">
		              {this.state.cond}
		            </em>
		            <i style={{transform:this.state.transzhuc}}></i>
		          </div>
		            <ul
	                style={{display:this.state.conddis}}
	                onClick={this.clickzhtb}
	                >
		              <li                        className={this.state.zhuconz==this.state.zt1?"grangb":""}
	                  content="1"
	                  >开放浏览</li>
		              <li
	                  className={this.state.zhuconz==this.state.zt2?"grangb":""}
	                  content="2"
	                  >会员浏览</li>
		            </ul>
		          </div>
		        </div>
	    			<div>
	    				<span>关键字</span>
						<input type="text"
							placeholder="请输入文章关键字"
						/>
	    			</div>
	    			<div className="abstract">
	    				<span>内容摘要</span>
						<input type="text"
							placeholder="请输入内容摘要"
						/>
	    			</div>
	    		</div>
    			<div >
    				<span className="esscont">文章内容</span>
    				<div className="editorBox">
<LzEditor active={true} importContent={this.state.markdownContent} cbReceiver={this.receiveMarkdown} image={false} video={false} audio={false} convertFormat="markdown"/>
    				</div>
    			</div>
					<div className="subtjc essadd">
								<a href={'javascript:;'}>立即提交</a>
								<a href={'javascript:;'}>重置</a>
					</div>
	    	</div>
    	)
    }
}
export default Addarticle;
