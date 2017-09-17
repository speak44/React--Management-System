import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import '../App.css';
import './css/common.css';
import './css/home.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Input } from 'antd';
import AddUser from './js/AddUser';
import Sy from './js/Sy';
import Userinfo from './js/Userinfo';
import AboutMe from './js/AboutMe';
import Passwd from './js/Passwd';
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
          {name:'小小',email:'1234@qq.com',sex:'男',vip:'高级会员',cond:'正常使用',time:'2017-9-16'},
          {name:'张三',email:'1234@qq.com',sex:'男',vip:'高级会员',cond:'正常使用',time:'2017-9-16'},
          {name:'李四',email:'1234@qq.com',sex:'男',vip:'高级会员',cond:'正常使用',time:'2017-9-16'}                    
        ]
    }
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  //鼠标移入头像显示个人信息列表
  pres=(()=>{
    this.setState({
       disshow:'block'
    })
  });
  //鼠标移开头像隐藏个人信息列表
  presLeave=(()=>{
    this.setState({
       disshow:'none'
    })
  })
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
              <Menu.Item key="8">文章总数</Menu.Item>
              <Menu.Item key="9">待审核文章</Menu.Item>
              <Menu.Item key="10">添加文章</Menu.Item>
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
              <Search
                placeholder="输入搜索内容"
                style={{ width: 200,float: 'left',margin:'0 0 0 16px'}}
                className='clearfixqxk'
                onSearch={value => console.log(value)}
              />
              <div className='syhead1'>
                <span>北京</span>
                <img
                  src={require('./img/yang.png')}
                />
                <span>26°C</span>
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
                    <i>
                    </i>
                  </a>
                  <ul
                    style={{display:this.state.disshow}}
                    >
                    <li><
                      a href={'javascript:;'} key='001'>个人资料</a>
                    </li>
                    <li>
                      <a href={'javascript:;'} key='002'>修改密码</a>
                    </li>
                    <li>
                      <a href={'javascript:;'} key='003'>退出</a>
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
                <Route path = "/home/AddUser" component = {AddUser} />
                <Route path = "/home/Userinfo" render={()=>{
                  return<Userinfo aduser={this.state.aduser}/>
                }}  />
                <Route path = "/home/AboutMe" component = {AboutMe} />
                <Route path ="/home/Passwd" component={Passwd}/>
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
