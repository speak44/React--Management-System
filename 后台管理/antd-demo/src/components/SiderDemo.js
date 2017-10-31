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
          //是否展示
          exhibition:true,
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
          //是否展示
          exhibition:true,
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
          //是否展示
          exhibition:true,
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
          //是否展示
          exhibition:false,
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
          //是否展示
        exhibition:true,
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
          //是否展示
        exhibition:false,
        time:'2017-10-29 02:02:05',
        cheched:false,
        //收藏
        collect:false,
        text:'jQuery是一套跨浏览器的JavaScript函式库，简化了HTML和JavaScript之间的操作.jQuery是开源软件，使用MIT许可证授权 jQuery的语法设计使得许多操作变得容易，如操作文档对象（document）、选择文档对象模型（DOM）元素、创建动画效果、处理事件、以及开发Ajax程序。jQuery也提供了给开发人员在其上创建插件的能力。这使开发人员可以对底层交互与动画、高级效果和高级主题化的组件进行抽象化。模块化的方式使jQuery函数库能够创建功能强大的动态网页以及网络应用程序。'
        },
        {
        title:'关于Udacity的那些事儿',
        writer:'AI科技大本营',
        audit:'审核通过',
        authoritymanagement:'公开浏览',
          //是否展示
        exhibition:false,
        time:'2017-4-5 02:02:05',
        //选中框默认false
        cheched:false,
        //收藏
        collect:false,
        text:'Udacity成立至今，从各大网络上能看出其不错的口碑。不过，近期的一个重磅消息——吴恩达的Deeplearning.ai课程——在网易云课堂上永久免费，这从某种意义上说，给各大培训机构带来不小的压力。当然，吴恩达课程永久免费的背后，是被牺牲掉的课程节奏和来自专业助教的课业辅导，以及来自吴恩达的深度学习认证。背靠吴恩达这个华人大IP，Deeplearning.ai打一出生就含着舆论的金钥匙，再加上“永久免费”这个特号喜讯，让国人倍感亲切，消息一出来就迅速传开了。相对来说，Udacity低调的多。如果说来自网易云课堂的Deeplearning.ai像一位性格随和人见人爱的邻家妹，那么Udacity更像一位职场上的干练女白领，不让人随随便便就接近，相对神秘。AI科技大本营曾在《刚刚，我们详细对比了吴恩达和Udacity的深度学习课程，你们感受下...》文章对两门课程进行过详细对比，此番不再赘述。尽管各有优劣，但就营收来说，确实不得不佩服Udacity强大的造血能力。据业内人士透露，Udacity进入中国16个月就已经开始赚钱了。而从人才供应链来看，在第一批被录取的400名“无人驾驶工程师”课程学员中，还没毕业就已经有60名学员被宝马、NVIDIA、洛克希德马丁和博世等国际大厂挖走了。而在过去一年内，Udacity的“无人驾驶工程师”纳米学位培养的无人驾驶工程师累计数量超10,000名，比全世界所有大学培养的该领域人才总和还要多。在这里，我们提Udacity的造血和人才供应力，希望引出更深层次的思考：在课程设置上，到底有哪些不为人知却无比巧妙的点，又是如何行之有效地解决了实际问题？ 支撑所有课程的核心根基是什么？哪些人适合Udacity，哪些人不适合Udacity而应该选择其他课程？为了让向AI转型的程序员更清楚地了解课程背后的意义，AI科技大本营第一时间联系到Udacity中国区市场&增长负责人宗唯伊，希望她能给出些许答案。以下为访谈实录，希望帮助你对Udacity，以及其他相关的培训课程，有一个通识性的理解。为便于理解，AI科技大本营问得尽可能细致，并对访谈内容做了不改变原意的编辑。'
        },
        {
        title:'人工智能创业的“风口”和“泡沫”',
        writer:'人工智能头条',
        audit:'待审核',
        authoritymanagement:'公开浏览',
          //是否展示
        exhibition:false,
        time:'2017-4-5 02:02:05',
        //选中框默认false
        cheched:false,
        //收藏
        collect:false,
        text:'人工智能时代刚刚到来，该领域的各种创业机会还处在相对早期的发展阶段。未来四五年对于人工智能时代的意义，和二十世纪七八十年代年代对于PC时代的意义相比，绝对毫不逊色。几乎可以预言，如果人工智能时代也会出现苹果、微软、Google、百度、阿里、腾讯等伟大公司的话，那么，这些公司一定会有相当数量是在这四五年内创立。因为资本、人才和市场三位一体的优势，美国的人工智能初创企业不仅数量最多，而且质量最高,类型最为齐全。从旧金山到硅谷，从西雅图到纽约，在AI芯片、AI平台、自动驾驶、智慧金融、智能医疗、机器人、智能物联网、智能教育、智能客服等领域里创业的公司数不胜数。英国是另一个人工智能创业的乐园，研发AlphaGo的DeepMind就是一大批英国AI创业明星中的代表。2017年1月，我（李开复）和伦敦市长Sadiq Aman Khan讨论英国人工智能创业氛围时了解到，英国之所以在人工智能创业领域独具特色，主要是因为英国有足够优秀的人工智能科学家，在科研领域处于世界顶尖水平，但在资本、市场等大环境上，英国仍无法与美国相比，这是包括DeepMind在内的许多英国创业团队都被美国公司收购的原因。Sadiq Aman Khan认为，英国应当加强自己的资本生态系统（英国支持科技创新的资本总量比美国、中国还是差了不少），同时需要让本土技术能更快走向美国、中国等更大的市场。加拿大是人工智能创业的“科研型孵化器”。深度学习三巨头中， Geoffrey Hinton和Yoshua Bengio都在加拿大的大学教书，这直接促成了加拿大极为出色的人工智能研究氛围。大批人工智能方向的优秀学生从加拿大的大学毕业。他们中的相当一部分都“南下”美国工作或创业，但也有不少人选择在加拿大开始他们的创业历程。2016年10月，Yoshua Bengio启动了一个名叫Element AI的创业孵化项目，专注于深度学习技术研发，帮助蒙特利尔大学和麦吉尔大学的人工智能研究项目建立初创公司。Yoshua Bengio说，“我将努力在蒙特利尔大学建立一个‘人工智能’生态。'
        },
        {
        title:'华为公开讽刺iPhoneX：面部识别没用！',
        writer:'比特网',
        audit:'审核通过',
        authoritymanagement:'公开浏览',
        //是否展示
        exhibition:false,
        time:'2017-4-5 02:02:05',
        //选中框默认false
        cheched:false,
        //收藏
        collect:false,
        text:'PhoneX自从曝光以来，新的Face ID人脸识别一直备受吐槽。无非是这项技术的严谨性和成熟性都还不能得到保障，而华为也公开呛声了。华为在 FB 上分享了一段攻击苹果 iPhone X Face ID 面部识别功能的广告。广告中，华为使用小丑 Emoji 表情+ 动画效果的方式，暗示使用面部识别解锁手机是注定要失败的，毫无用处。同时，宣传语为：“让我们面对现实吧!并不是所有人都适合面部识别。2017.10.16，我们用全新 AI 手机解锁未来。”华为将于下个月发布全新旗舰智能手机 Mate 10。iPhone X：苹果卖的贵却赚的少？iPhone X虽然卖得贵，但利润率远低于iPhone 7。分析人士周一指出，虽然iPhone X售价超过1000美元，但其利润率却远低于当前的iPhone 7。苹果去年发布的iPhone 7的起始售价为650美元，而刚刚发布的iPhone X的起始售价为999美元。与此同时，金融服务公司海纳国际集团(Susquehanna International Group)数据显示，iPhone X的零部件成本高达581美元，而iPhone 7零部件成本仅为248美元。所以其实，搭载这许多创新科技的iPhoneX，外形也做出了巨大改变，售价虽然远超过去iPhone新机的售价，但是性价比其实还是非常高的。'
        },
        {
        title:'如何优化Web服务器以实现高吞吐量和低延迟',
        writer:'CSDN',
        audit:'待审核',
        authoritymanagement:'公开浏览',
        //是否展示
        exhibition:false,
        time:'2017-4-5 02:02:05',
        //选中框默认false
        cheched:false,
        //收藏
        collect:false,
        text:'这是对2017年9月6日在NginxConf 2017年演讲内容的延伸。作为Dropbox Traffice团队的网络可靠性工程师（SRE，Site Reliability Engineer ），我负责公司的边缘网络，包括它的可靠性、性能和效率。Dropbox 边缘网络是一个基于nginx的代理层，用于处理敏感的元数据事务和高吞吐量数据传输。在处理数以万计敏感事务的系统中，通过TCP/IP协议和内核，从驱动程序、中断到库、应用级调优，整个代理堆栈中都存在效率/性能优化。'
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
    localStorage.setItem('articlearronoff',JSON.stringify(true));
  }
  //批量删除
  artdelall=()=>{
    let {articlearr}=this.state
    let articlearr2=Object.assign(articlearr)
    articlearr2=articlearr2.filter((e)=>{
      return !e.cheched
    })
    this.setState({
      articlearr:articlearr2,
      allonof:false
    })
    localStorage.setItem('articlearr',JSON.stringify(articlearr2));
    localStorage.setItem('wenallonoff',JSON.stringify(false));
    localStorage.setItem('articlearronoff',JSON.stringify(true));
  }
  //点击是否展示
  clickyerorno=(newid)=>{
    let {articlearr}=this.state
    let articlearr2=Object.assign(articlearr)
    articlearr2.forEach((e,i)=>{
      if(i==newid){
          e.exhibition=!e.exhibition
      }
    })
    this.setState({
      articlearr:articlearr2
    })
    localStorage.setItem('articlearr',JSON.stringify(articlearr2));
    localStorage.setItem('articlearronoff',JSON.stringify(true));
  }
  //文章添加
  changearticlearr=(newjson)=>{
    let {articlearr}=this.state;
    let articlearr2=Object.assign(articlearr);
    articlearr2.unshift(newjson);
    this.setState({
      articlearr:articlearr2
    })
    localStorage.setItem('articlearr',JSON.stringify(articlearr2));
    localStorage.setItem('articlearronoff',JSON.stringify(true));
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
                      //批量删除
                      artdelall={this.artdelall}
                      //点击是否展示
                      clickyerorno={this.clickyerorno}
                  />
                }}/>
                <Route path ="/home/Examine" component={Examine}/>
                <Route path ="/home/Addarticle"
                    render={()=>{
                      return<Addarticle
                      changearticlearr={this.changearticlearr}
                      />
                    }}/>
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
