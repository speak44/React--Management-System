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
        articlearr:[
          {
          title:'《Web应用安全权威指南》读后有感',
          writer:'王辉',
          audit:'审核通过',
          authoritymanagement:'开放浏览',
          exhibition:'是',
          time:'2017-10-29 02:02:05',
          cheched:false,
          //收藏
          collect:false,
          text:'整体给人很严谨很仔细，有时可以说是有点啰嗦了，当然这并没有任何的贬义。相反，这对于新手入门来说，是一大利好。新手入门往往充满着敬畏与迷茫，如果上来就是各种大术语,高精尖的漏洞利用，往往会让人望而生畏，失去继续学习的动力。这本权威指南总的来说还是很不错的，对Web漏洞这块的讲解翔实仔细，分类也是比一般的书更为精细，如果通篇读下来，对Web漏洞的原理以及基本防范措施,基本能做到心中有数。全书共分为8章，重点是第四章“Web应用的各种安全隐患”，我自己也是这章花的时间最多。前面的包括搭建环境，同源策略，HTTP协议这些都比较熟悉，所以很快地浏览完了。关于第四章的漏洞讲解，我也基本上同时参照了所给的虚拟机环境以及Fiddler，进行了同步的操作。原来对XSS SQL注入 CSRF这些都有过了解，但是仅限于一些简单的构造和利用，对前后台交互层面的原理不得而知，阅读完这几章之后，有了更加深刻的认知。当然深知这是不够的，以后的打算是进一步深刻理解这些漏洞原理，通过Kali Linux的相关工具在实战中联系这些漏洞的利用。同时工具不能仅限于使用，还要明白其底层原理。自己也同时在学习Python,准备重点是网络编程这块，利用好自带的安全的库，尝试写一些工具脚本。学习是一个循序渐进的过程，读完一本书并不仅限于学到其中的知识，而是将原来一知半解的东西弄懂，并且对未来的学习路径有了更清晰的认知。能够调整节奏与方向，更好的完成知识积累，技术栈的完善。当然，这本书也存在一些个人认为的缺陷。书是日本作家写的，虚拟机环境也是日文的，如今翻译到国内了，虚拟机应该也做相应的调整。满眼的日文，确实是不太友好。希望日后能够改善，为入门者提供一个更加和谐 友好的实战环境。以上是本人在读罢《Web应用安全权威指南》的一些感受，个人所感，文笔与水平有限，望各位大佬多多指教。'
          },
          {
          title:'CSS发展史',
          writer:'沈晨',
          audit:'待审核',
          authoritymanagement:'开放浏览',
          exhibition:'是',
          time:'2017-10-29 02:02:05',
          cheched:false,
          //收藏
          collect:false,
          text:'CSS（Cascading Style Sheets，层叠样式表）是一种将表示样式应用到标记的系统。CSS以设计、改变其HTML页面的样式而知名，并使用于Web和其他媒介，如XML文档中。1996年12月W3C推出了CSS规范的第一个版本，1998年W3C发布了CSS的第二个版本即CSS2.0,2001年5月W3C开始进行CSS3标准的制定，到目前为止该标准还没有最终定稿。'
          },
          {
          title:'HTTP',
          writer:'赵可欣',
          audit:'待审核',
          authoritymanagement:'会员浏览',
          exhibition:'是',
          time:'2017-10-29 02:02:05',
          cheched:false,
          //收藏
          collect:false,
          text:'HTTP主要解决的是客户端到服务器端如何传递HTML信息的问题。 （脑补一下，左侧PC，右侧Server)站在PC端的角度，我们需要考虑的是如何发出请求; 站在服务器的角度，则需要考虑如何响应。"请求"考虑的是到底有哪些方法，例如GET，POST等等。"响应"考虑的是响应消息的类型，也叫做状态码。那么在类似购物网站中，服务器如何识别用户身份呢？在客户端PC那里画个Cookie。 PC和Server之间如何有效的传递信息呢？再在PC和Server之间画个通道，写上四种连接方法。'
          },
          {
          title:' Facebook拒修改React开源许可，你会对React说再见吗？',
          writer:'赵可欣',
          audit:'待审核',
          authoritymanagement:'会员浏览',
          exhibition:'否',
          time:'2017-10-29 02:02:05',
          cheched:false,
          //收藏
          collect:false,
          text:'据了解，Facebook几周前发表了一篇名为《关于React使用许可协议的官方声明》的申明。声明中称，任何人不能将React用于与Facebook及其合作公司有直接或间接竞争关系的项目中，否则Facebook公司自动取消其使用许可。Facebook 在 React 的专利许可证里“偷跑”了一堆让开发者恐慌和心寒的条款，直白的翻一下，大意是如果你在你的产品里用到了 React，哪怕只有一点点，你对于产品所拥有的知识产权也等于直接送给 Facebook 免费用。React作为Facebook 内部开发 Instagram 的项目中，是一个用来构建用户界面的优秀 JS 库，于 2013 年 5 月开源。随着React用户的增多，Facebook在 2016 年7月，修改了开源许可协议中的附加专利条款 Additional patent grant，并在当时引起了强烈的讨论。而在今年的7月16号，由于Facebook之前存在的协议，Apache 基金会把 Facebook BSD+Patents 加入了黑名单，并从开源项目中移除。就在昨天，知名技术博客平台WordPress创始人Matt在其博客上发文，将全面停止使用React，原因则是专利问题。同时，一些国内大公司也因 Facebook条款 有逐步停用 React / React Native 技术栈呢？为前端的三大框架之一，React的应用可以说是非常的广泛，包括BAT在内的许多大公司很多项目都是基于其开发的。根据Facebook 的附加协议，所有采用React框架的项目(事实上)将全部免费赠予facebook使用，这对于大公司来说无疑不是灾难性的。以百度为例，按照React目前协议，facebook事实上可以免费大胆的使用百度人工智能、自动驾驶方面获颁的专利，为了不让Facebook获取相关的敏感信息，唯一选择就是不让公司的前端使用React。这样看来，美帝国主义确实是比较恶心的。'
        },
        {
        title:'Vue和React的使用场景和深度有何不同？',
        writer:'尤雨溪',
        audit:'审核通过',
        authoritymanagement:'会员浏览',
        exhibition:'是',
        time:'2017-10-29 02:02:05',
        cheched:false,
        //收藏
        collect:false,
        text:'首先，其实 Vue 也完全可以全量赋值的，唯一需要的小优化就是给 v-repeat 列表一个 track-by 属性，提示一下如何判断两个对象是否是同一份数据。如果是没有复杂交互的列表，可以直接 track-by="$index" 原地复用 DOM 元素。合理使用 track-by 的情况下，Vue 甚至可以比 React 更快（这里渲染的是 100 * 5 的数据表，每一帧都是全量新数据赋值）：dbmon (Vue)dbmon (react)在超大量数据的首屏渲染速度上，React 有一定优势，因为 Vue 的渲染机制启动时候要做的工作比较多，而且 React 支持服务端渲染。需要指出的一点：React 的 Virtual DOM 也不是不需要优化的。复杂的应用里你有两个选择 1. 手动添加 shouldComponentUpdate 来避免不需要的 vdom re-render；2. Components 尽可能都用 pureRenderMixin，然后采用 Flux 结构 + Immutable.js。其实也不是那么简单的。相比之下，Vue 由于采用依赖追踪，默认就是优化状态：你动了多少数据，就触发多少更新，不多也不少。说起 Flux 架构，FB 提供的标准实现非常繁琐，所以社区的各种造轮子版本层出不穷，目前其实还没有找到一个公认的最佳实践，而且大部分新 Flux 实现都引入了很多函数式概念，你如果对函数式编程不熟悉，光搞清楚那些概念就得花很久。'
        },
        {
        title:'jquery框架是什么？',
        writer:'周海军',
        audit:'审核通过',
        authoritymanagement:'会员浏览',
        exhibition:'否',
        time:'2017-10-29 02:02:05',
        cheched:false,
        //收藏
        collect:false,
        text:'jQuery是一套跨浏览器的JavaScript函式库，简化了HTML和JavaScript之间的操作.jQuery是开源软件，使用MIT许可证授权 jQuery的语法设计使得许多操作变得容易，如操作文档对象（document）、选择文档对象模型（DOM）元素、创建动画效果、处理事件、以及开发Ajax程序。jQuery也提供了给开发人员在其上创建插件的能力。这使开发人员可以对底层交互与动画、高级效果和高级主题化的组件进行抽象化。模块化的方式使jQuery函数库能够创建功能强大的动态网页以及网络应用程序。'
        }
        ],
        allonof:false,
        //文章触发全选
        wenallonoff:false,
        serval:'javascript:;',
        timer:null,
        transzhuc:''
    }
  }
  componentDidMount(){
    //用户信息存储
    if(JSON.parse(localStorage.getItem('personnel'))){
      let ad2= JSON.parse(localStorage.getItem('aduser'))
      this.setState({
        aduser:ad2
      })
    }else{
      localStorage.setItem('aduser',JSON.stringify(this.state.aduser));
      // let ad2= JSON.parse(localStorage.getItem('aduser'))
      // this.setState({
      //   aduser:ad2
      // })
    }
    //全选功能的存储数据
    if (JSON.parse(localStorage.getItem('allonof'))) {
      let allonof2= JSON.parse(localStorage.getItem('allonof'))
      this.setState({
        allonof:allonof2
      })
    }
    //文章本地存储数据
    if(JSON.parse(localStorage.getItem('articlearronoff'))){
      let articlearr2= JSON.parse(localStorage.getItem('articlearr'))
      this.setState({
        articlearr:articlearr2
      })
    }else{
        localStorage.setItem('articlearr',JSON.stringify(this.state.articlearr));
        localStorage.setItem('articlearronoff',JSON.stringify(false));
    }
    //文章全选触发
    if (JSON.parse(localStorage.getItem('wenallonoff'))) {
      let wenallonoff2= JSON.parse(localStorage.getItem('wenallonoff'))
      this.setState({
        wenallonoff:wenallonoff2
      })
    }
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
    let {aduser}=this.state;
    let aduser2=Object.assign(aduser);
    aduser2.unshift(newjson);
    this.setState({
      aduser:aduser2
    })
     localStorage.setItem('aduser',JSON.stringify(this.state.aduser));
     localStorage.setItem('personnel',JSON.stringify(true));
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
    localStorage.setItem('aduser',JSON.stringify(aduser2));
    localStorage.setItem('personnel',JSON.stringify(true));
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
   localStorage.setItem('aduser',JSON.stringify(aduser2));
   localStorage.setItem('allonof',JSON.stringify(all));
   localStorage.setItem('personnel',JSON.stringify(true));

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
    localStorage.setItem('allonof',JSON.stringify(false));
    }else{
      aduser2.forEach((e,i)=>{
        e.cheched=true
      })
      this.setState({
        aduser:aduser2,
        allonof:true
      })
    localStorage.setItem('allonof',JSON.stringify(true));
    }
     localStorage.setItem('aduser',JSON.stringify(aduser2));
     localStorage.setItem('personnel',JSON.stringify(true));
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
    localStorage.setItem('allonof',JSON.stringify(this.state.allonof));
    localStorage.setItem('aduser',JSON.stringify(aduser2));
    localStorage.setItem('personnel',JSON.stringify(true));
  }
  //修改密码改正
  paschange=(newpascont)=>{
    this.props.newpas(newpascont)
  }
  /**************************文章列表的操作****************************/
  //点击收藏
  collectclick=(newid)=>{
    let {articlearr}=this.state
    let articlearr2=Object.assign(articlearr)
    articlearr2.forEach((e,i)=>{
      if(i==newid){
          e.collect=!e.collect
      }
    })
    this.setState({
      articlearr:articlearr2
    })
   localStorage.setItem('articlearr',JSON.stringify(articlearr2));
   localStorage.setItem('articlearronoff',JSON.stringify(true));
  }
  //点击选中
  articleclickright=(newid)=>{
    let {articlearr}=this.state
    let articlearr2=Object.assign(articlearr)
    articlearr2.forEach((e,i)=>{
      if(i==newid){
          e.cheched=!e.cheched
      }
    })
    let all=null;
    all=articlearr2.every((e)=>{
          return e.cheched
      })
    this.setState({
      aduser:articlearr2,
      wenallonoff:all
    })
    localStorage.setItem('articlearr',JSON.stringify(articlearr2));
    localStorage.setItem('articlearronoff',JSON.stringify(true));
    localStorage.setItem('wenallonoff',JSON.stringify(all));
  }
  //全选按钮点击事件触发
  artrightall=()=>{
    let {articlearr}=this.state
    let articlearr2=Object.assign(articlearr)
    if(this.state.wenallonoff){
      articlearr2.forEach((e,i)=>{
        e.cheched=false
      })
      this.setState({
        articlearr:articlearr2,
        wenallonoff:false
      })
      localStorage.setItem('wenallonoff',JSON.stringify(false));
    }else{
      articlearr2.forEach((e,i)=>{
        e.cheched=true
      })
      this.setState({
        articlearr:articlearr2,
        wenallonoff:true
      })
      localStorage.setItem('articlearronoff',JSON.stringify(true));
    }
    localStorage.setItem('articlearr',JSON.stringify(articlearr2));
  }
  //每个删除按钮
  artremoveone=(newid)=>{
    let {articlearr}=this.state
    let articlearr2=null;
    articlearr2=articlearr.filter((e,i)=>{
      return i!=newid
    })
    this.setState({
      articlearr:articlearr2
    })
    localStorage.setItem('articlearr',JSON.stringify(articlearr2));
    localStorage.setItem('wenallonoff',JSON.stringify(true));
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
            <div style={{ padding:24, background: '#fff', height: 613,overflow:'auto'}}>
              <Switch>
                <Route exact path = "/home" component = {Sy} />
                <Route path = "/home/AddUser" render={()=>{
                  return<AddUser changedata={this.changedata}/>
                }} />
                <Route path = "/home/Userinfo" render={()=>{
                  return<Userinfo
                    // aduser={this.state.aduser}
                    remove={this.remove}
                    clickright={this.clickright}
                    allclick={this.allclick}
                    allonof={this.state.allonof}
                    alldel={this.alldel}
                  />
                }}  />
                <Route path = "/home/AboutMe" component = {AboutMe} />
                <Route path ="/home/Passwd" render={()=>{
                  return <Passwd
                    // userarr={this.props.arr}
                    paschange={this.paschange}
                  />
                }}/>
                <Route path ="/home/Article"  render={()=>{
                  return <Article
                      // articlearr={this.state.articlearr}
                      // 收藏点击
                      collectclick={this.collectclick}
                      //选中点击
                      articleclickright={this.articleclickright}
                      //全选按钮点击事件
                      artrightall={this.artrightall}
                      //全选按钮改变class名的
                      wenallonoff={this.state.wenallonoff}
                      //每个删除按钮
                      artremoveone={this.artremoveone}
                  />
                }}/>
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
