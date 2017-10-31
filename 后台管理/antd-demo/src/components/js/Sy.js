import React, { Component } from 'react';
import Mostactive from './Mostactive';
import { Button } from 'antd';
import Echarts from './echart';
import '../css/common.css';
import '../css/indexstyle.css';
class Sy extends Component {
  render(){
    let articlearr=JSON.parse(localStorage.getItem('articlearr'));
    let articlearr2=articlearr.filter((e)=>{
      return e.exhibition
    })
    let list=articlearr2.map((e,i) => {
      let data={
        id:i,
        key:i,
        title:e.title,
        time:e.time
      }
      return <Mostactive {...data}/>
    })
    return (
      <div className='indexcon'>
        <div className='indc-top clearfixqxk'>
            <a href={'javascript:;'} className='inta clearfixqxk'>
              <div className='indt-tu'
                    style={{background: '#54ade8'}}>
                <i className='inii1'></i>
              </div>
              <div className='magstext'>
                <span>5</span>
                <span>新信息</span>
              </div>
            </a>
            <a href={'javascript:;'} className='inta clearfixqxk'>
              <div className='indt-tu'
                    style={{background: '#ff5722'}}>
                <i className='inii2'></i>
              </div>
              <div className='magstext'>
                <span>3</span>
                <span>新增人数</span>
              </div>
            </a>
            <a href={'javascript:;'} className='inta clearfixqxk'>
              <div className='indt-tu'
                style={{background: '#009688'}}>
                <i className='inii3'></i>
              </div>
              <div className='magstext'>
                <span>3</span>
                <span>用户数据</span>
              </div>
            </a>
            <a href={'javascript:;'} className='inta clearfixqxk'>
              <div className='indt-tu'
                style={{background: '#5fb878'}}>
                <i className='inii4'></i>
              </div>
              <div className='magstext'>
                <span>31</span>
                <span>图片总数</span>
              </div>
            </a>
            <a href={'javascript:;'} className='inta clearfixqxk'>
              <div className='indt-tu'
                style={{background: '#f7b824'}}>
                <i className='inii5'></i>
              </div>
              <div className='magstext'>
                <span>13</span>
                <span>审核文章</span>
              </div>
            </a>
            <a href={'javascript:;'} className='inta clearfixqxk'>
              <div className='indt-tu'
                style={{background: '#2f4056'}}>
                <i className='inii6'></i>
              </div>
              <div className='magstext'>
                <span>30</span>
                <span>文章总数</span>
              </div>
            </a>
        </div>
        <div className='indc-comit clearfixqxk'>
          <div className='echar'>
              <Echarts/>
          </div>
          <div className='hotess'>
            <div className='hotes-top clearfixqxk'>
              <span>最新文章</span>
              <i></i>
            </div>
            <ul>
              {list}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Sy;
