import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import $ from 'jquery';
import '../App.css';
import './css/common.css';
import './css/home.css';
import { Layout, Menu, Breadcrumb, Icon, Input, BackTop} from 'antd';
//import { Input } from 'antd';
import Weather from './js/Weather';
import AddUser from './js/AddUser';
import Sy from './js/Sy';
import Userinfo from './js/Userinfo';
import AboutMe from './js/AboutMe';
import Passwd from './js/Passwd';
import Article from './js/Article';
import Examine from './js/Examine';
import Addarticle from './js/Addarticle';
//import { BackTop } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const Search = Input.Search;

class SiderDemo extends Component {
  constructor(){
    super();
    this.state={
        collapsed: false,
        //个人信息隐藏
        disshow:'none',
        aduser:[
          {name:'小小',email:'1234@qq.com',sex:'男',vip:'高级会员',cond:'正常使用',time:'2017/3/3 下午2:45:42',cheched:false},
          {name:'张三',email:'1234@qq.com',sex:'男',vip:'高级会员',cond:'正常使用',time:'2017/4/5 下午2:45:42',cheched:false},
          {name:'李四',email:'1234@qq.com',sex:'男',vip:'高级会员',cond:'正常使用',time:'2017/5/5 下午2:45:42',cheched:false}
        ],
        allonof:false,
        serval:'javascript:;',
        timer:null,
        transzhuc:''
    }
  }
  componentDidMount(){

  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  // 百度搜索
  sear=()=>{
    let val=$('.seratext').val()
    this.setState({
      serval:`https://www.baidu.com/s?wd=${val}&cl=3`
    })
    $('.seratext').val('')
  }
  //鼠标移入头像显示个人信息列表
  pres=(()=>{
    this.setState({
       disshow:'block',
       transzhuc:'rotate(180deg)'
    })
    // $('.trani').transition
  });
  //鼠标移开头像隐藏个人信息列表
  presLeave=(()=>{
    let _this=this
    this.timer=setTimeout(function(){
      _this.setState({
         disshow:'none',
        transzhuc:''
      })
		},500)

  })
  //鼠标移开ul关闭定时器
  presul=(()=>{
    clearInterval(this.timer)
  })
  //数组添加内容
  changedata=(newjson)=>{
    console.log(newjson)
    let {aduser}=this.state;
    let aduser2=Object.assign(aduser);
    aduser2.unshift(newjson);
    this.setState({
      aduser:aduser2
    })
  }
  //删除用户内容
  remove=(newid)=>{
    let {aduser}=this.state
    let aduser2=null;
    aduser2=aduser.filter((e,i)=>{
      return i!=newid
    })
    this.setState({
      aduser:aduser2
    })
  }
  //选中画√
  clickright=(newid)=>{
    let {aduser}=this.state
    let aduser2=Object.assign(aduser)
    aduser2.forEach((e,i)=>{
      if(i==newid){
          e.cheched=!e.cheched
      }
    })
    let all=null;
    all=aduser2.every((e)=>{
          return e.cheched
      })
    this.setState({
      aduser:aduser2,
      allonof:all
    })
  }
  //全选按钮触发
  allclick=()=>{
    let {aduser}=this.state
    let aduser2=Object.assign(aduser)
    if(this.state.allonof){
      aduser2.forEach((e,i)=>{
        e.cheched=false
      })
      this.setState({
        aduser:aduser2,
        allonof:false
      })
    }else{
      aduser2.forEach((e,i)=>{
        e.cheched=true
      })
      this.setState({
        aduser:aduser2,
        allonof:true
      })
    }
  }
  //批量删除
  alldel=()=>{
    let {aduser}=this.state
    let aduser2=Object.assign(aduser)
    aduser2=aduser2.filter((e)=>{
      return !e.cheched
    })
    this.setState({
      aduser:aduser2,
      allonof:false
    })
  }
  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" style={{height:64}}>
              <Link to="/home">
                <Icon type="pie-chart" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="user" /><span>人员管理</span></span>}
            >
              <Menu.Item key="4">
                <Link to="/home/AddUser">
                  添加用户
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
	              <Link to="/home/Userinfo">
	              用户数据
	              </Link>
              </Menu.Item>
              <Menu.Item key="6">
	              <Link to="/home/AboutMe">
	              个人资料
	              </Link>
              </Menu.Item>
              <Menu.Item key="7">
	              <Link to="/home/Passwd">
	              修改密码
	              </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span>文章统计</span></span>}
            >
              <Menu.Item key="8">
	              <Link to="/home/Article">
	              文章列表
	              </Link>
              </Menu.Item>
              <Menu.Item key="9">
              	<Link to="/home/Examine">
              	待审核文章
              	</Link>
              </Menu.Item>
              <Menu.Item key="10">
              	<Link to="/home/Addarticle">
              	添加文章
              	</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="11">
              <Icon type="file" />
              <span>友情链接</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '23262e', padding: 0 }}  className='clearfixqxk'>
            <div   className='clearfixqxk'>
              <div className="baidu clearfixqxk">
                <input
                  placeholder="百度搜索"
                  className='clearfixqxk seratext'
                />
                <a href={this.state.serval}
                  target="_blank"
                  id="sear"
                  onClick={this.sear}
                  ></a>
              </div>
              <div>
                <Weather/>
              </div>
              <div className='clearfixqxk hedgg'>
                <div className='ggn'>系统公告</div>
                <div
                  className='mes'
                  onMouseEnter={this.pres}
                  onMouseLeave={this.presLeave}
                  >
                  <a href={'javascript:;'} className="hedab" >
                    <img src={require('./img/txian.png')}
                    />
                    <span className='ggn'>cici</span>
                    <i style={{transform:this.state.transzhuc}}>
                    </i>
                  </a>
                  <ul
                    style={{display:this.state.disshow}}
                    onMouseEnter={this.presul}
                    >
                    <li>
                      <Link to="/home/AboutMe" key='001'>
                        个人资料
                      </Link>
                    </li>
                    <li>
                      <Link to="/home/Passwd" key='002'>修改密码</Link>
                    </li>
                    <li>
                      <Link to="/" key='003'>退出</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', height: 613,overflow:'auto'}}>
              <Switch>
                <Route exact path = "/home" component = {Sy} />
                <Route path = "/home/AddUser" render={()=>{
                  return<AddUser changedata={this.changedata}/>
                }} />
                <Route path = "/home/Userinfo" render={()=>{
                  return<Userinfo
                    aduser={this.state.aduser}
                    remove={this.remove}
                    clickright={this.clickright}
                    allclick={this.allclick}
                    allonof={this.state.allonof}
                    alldel={this.alldel}
                  />
                }}  />
                <Route path = "/home/AboutMe" component = {AboutMe} />
                <Route path ="/home/Passwd" component={Passwd}/>
                <Route path ="/home/Article" component={Article}/>
                <Route path ="/home/Examine" component={Examine}/>
                <Route path ="/home/Addarticle" component={Addarticle}/>
              </Switch>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
                  作品展示
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
