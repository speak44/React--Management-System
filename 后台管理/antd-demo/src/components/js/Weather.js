import React, { Component } from 'react';
import $ from 'jquery';
class Weather extends Component{
  constructor(){
    super()
    this.state={
      wearimg:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1271447300,587957412&fm=27&gp=0.jpg"
    }
  }
  componentDidMount(){
    $.ajax({
        type:"get",
        url:"http://wthrcdn.etouch.cn/weather_mini?citykey=101010100",
        dataType:"jsonp",
        jsonpCallback:"cb",
        success:function(data){
            console.log(data.data.forecast[0]);
            $('.weat').html(`
              <em>${data.data.forecast[0].high.trim()}</em>
              <em>${data.data.forecast[0].low.trim()}</em>`)
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
