import React, { Component } from 'react';
import $ from 'jquery';
import w0 from '../img/weather/0.png';
import w4 from '../img/weather/4.png';
import w5 from '../img/weather/5.png';
import w7 from '../img/weather/7.png';
import w9 from '../img/weather/9.png';
import w10 from '../img/weather/10.png';
import w11 from '../img/weather/11.png';
import w12 from '../img/weather/12.png';
import w13 from '../img/weather/13.png';
import w14 from '../img/weather/14.png';
import w15 from '../img/weather/15.png';
import w16 from '../img/weather/16.png';
import w17 from '../img/weather/17.png';
import w18 from '../img/weather/18.png';
import w19 from '../img/weather/19.png';
import w20 from '../img/weather/20.png';
import w21 from '../img/weather/21.png';
import w22 from '../img/weather/22.png';
import w23 from '../img/weather/23.png';
import w24 from '../img/weather/24.png';
import w25 from '../img/weather/25.png';
import w26 from '../img/weather/26.png';
import w27 from '../img/weather/27.png';
import w28 from '../img/weather/28.png';
import w29 from '../img/weather/29.png';
import w30 from '../img/weather/30.png';
import w31 from '../img/weather/31.png';
import w32 from '../img/weather/32.png';
import w33 from '../img/weather/33.png';
import w34 from '../img/weather/34.png';
import w35 from '../img/weather/35.png';
import w36 from '../img/weather/36.png';
class Weather extends Component{
  constructor(){
    super()
    this.state={
      wearimg:null
    }
  }
  componentDidMount(){
    let _this=this;
    $.ajax({
        type:"get",
        url:"http://wthrcdn.etouch.cn/weather_mini?citykey=101010100",
        dataType:"jsonp",
        jsonpCallback:"cb",
        success:function(data){
            let newdata=data.data.forecast[0]
            $('.weat').html(`
              <em>${newdata.high.trim()}</em>
              <em>${newdata.low.trim()}</em>`)
            switch (newdata.type.trim()) {
              case '多云':
                _this.setState({
                  wearimg:w4
                })
                break;
              case '晴间多云':
                _this.setState({
                  wearimg:w5
                })
              break;
              case '大部多云':
                _this.setState({
                  wearimg:w7
                })
              break;
              case '阴':
                _this.setState({
                  wearimg:w9
                })
              break;
              case '阵雨':
                _this.setState({
                  wearimg:w10
                })
              break;
              case '雷阵雨':
                _this.setState({
                  wearimg:w11
                })
              break;
              case '雷阵雨伴有冰雹':
                _this.setState({
                  wearimg:w12
                })
              break;
              case '小雨':
                _this.setState({
                  wearimg:w13
                })
              break;
              case '中雨':
                _this.setState({
                  wearimg:w14
                })
              break;
              case '大雨':
                _this.setState({
                  wearimg:w15
                })
              break;
              case '暴雨':
                _this.setState({
                  wearimg:w16
                })
              break;
              case '大暴雨':
                _this.setState({
                  wearimg:w17
                })
              break;
              case '特大暴雨':
                _this.setState({
                  wearimg:w18
                })
              break;
              case '冻雨':
                _this.setState({
                  wearimg:w19
                })
              break;
              case '雨夹雪':
                _this.setState({
                  wearimg:w20
                })
              break;
              case '阵雪':
                _this.setState({
                  wearimg:w21
                })
              break;
              case '小雪':
                _this.setState({
                  wearimg:w22
                })
              break;
              case '中雪':
                _this.setState({
                  wearimg:w23
                })
              break;
              case '大雪':
                _this.setState({
                  wearimg:w24
                })
              break;
              case '暴雪':
                _this.setState({
                  wearimg:w25
                })
              break;
              case '浮尘':
                _this.setState({
                  wearimg:w26
                })
              break;
              case '扬沙':
                _this.setState({
                  wearimg:w27
                })
              break;
              case '沙尘暴':
                _this.setState({
                  wearimg:w28
                })
              break;
              case '强沙尘暴':
                _this.setState({
                  wearimg:w29
                })
              break;
              case '雾':
                _this.setState({
                  wearimg:w30
                })
              break;
              case '霾':
                _this.setState({
                  wearimg:w31
                })
              break;
              case '风':
                _this.setState({
                  wearimg:w32
                })
              break;
              case '大风':
                _this.setState({
                  wearimg:w33
                })
              break;
              case '飓风':
                _this.setState({
                  wearimg:w34
                })
              break;
              case '热带风暴':
                _this.setState({
                  wearimg:w35
                })
              break;
              case '龙卷风':
                _this.setState({
                  wearimg:w36
                })
              break;
              default:
                _this.setState({
                  wearimg:w0
                })
              break
            }
            $('.syhead1').mousemove(()=>{
              $('.syhead1').attr("title",newdata.type.trim())
            });
        }
      })

   }
  render(){
    return(
        <div className='syhead1'>
          <span>北京</span>
          <img src={this.state.wearimg}/>
          {/* <img src={require('../img/yang.png')} /> */}
          <span className="clearfixqxk weat"></span>
        </div>
    )
  }
}
export default Weather;
