import React, { Component } from 'react';
import { Cascader } from 'antd';
//import '../css/aboutme.css';
const options = [
{
  value: '北京',
  label: '北京',
  children:[
  {
      value: '东城区',
      label: '东城区'
  },
  {
      value: '西城区',
      label: '西城区'
  },
  {
      value: '崇文区',
      label: '崇文区'
  },
  {
      value: '宣武区',
      label: '宣武区'
  },
  {
      value: '朝阳区',
      label: '朝阳区'
  },
  {
      value: '海淀区',
      label: '海淀区'
  },
  {
      value: '丰台区',
      label: '丰台区'
  },
  {
      value: '石景山区',
      label: '石景山区'
  },
  {
      value: '房山区',
      label: '房山区'
  },
  {
      value: '通州区',
      label: '通州区'
  },
  {
      value: '顺义区',
      label: '顺义区'
  },
  {
      value: '昌平区',
      label: '昌平区'
  },
  {
      value: '大兴区',
      label: '大兴区'
  },
  {
    value: '怀柔区',
    label: '怀柔区'
  },
  {
    value: '平谷区',
    label: '平谷区'
  },
  {
    value: '门头沟区',
    label: '门头沟区'
  },
  {
    value: '密云县',
    label: '密云县'
  },
  {
    value: '延庆县',
    label: '延庆县'
  }]
},{
  value: '广东',
  label: '广东',
  children: [{
    value: '广州',
    label: '广州',
    children: [{
      value: '越秀区',
      label: '越秀区'
    },
    {
      value: '荔湾区',
      label: '荔湾区'
    },
    {
      value: '海珠区',
      label: '海珠区'
    },
    {
      value: '天河区',
      label: '天河区'
    },
    {
      value: '白云区',
      label: '白云区'
    },
    {
      value: '黄埔区',
      label: '黄埔区'
    },
    {
      value: '番禺区',
      label: '番禺区'
    },
    {
      value: '花都区',
      label: '花都区'
    },
    {
      value: '南沙区',
      label: '南沙区'
    },
    {
      value: '萝岗区',
      label: '萝岗区'
    },
    {
      value: '增城市',
      label: '增城市'
    },
    {
      value: '从化市',
      label: '从化市'
    },
    {
      value: '其他',
      label: '其他'
    }]
  },
  {
    value: '深圳',
    label: '深圳',
    children:[{
        value: '福田区',
        label: '福田区'
    },
    {
      value: '罗湖区',
      label: '罗湖区'
    },
    {
      value: '南山区',
      label: '南山区'
    },
    {
      value: '宝安区',
      label: '宝安区'
    },
    {
      value: '龙岗区',
      label: '龙岗区'
    },
    {
      value: '盐田区',
      label: '盐田区'
    },
    {
      value: '其他',
      label: '其他'
    }]
  },
  {
    value: '珠海',
    label: '珠海',
    children:[{
      value: '香洲区',
      label: '香洲区'
    },
    {
      value: '斗门区',
      label: '斗门区'
    },
    {
      value: '金湾区',
      label: '金湾区'
    },
    {
      value: '其他',
      label: '其他'
    }]
  },
  {
    value: '汕头',
    label: '汕头' ,
    children:[{
      value:'金平区',
      label:'金平区'
    },
    {
      value:'濠江区',
      label:'濠江区'
    },
    {
      value:'龙湖区',
      label:'龙湖区'
    },
    {
      value:'潮阳区',
      label:'潮阳区'
    },
    {
      value:'潮南区',
      label:'潮南区'
    },
    {
      value:'南澳县',
      label:'南澳县'
    },{
      value:'其他',
      label:'其他'
    }]
  },
  {
    value:'韶关',
    label:'韶关',
    children:[{
      value:'浈江区',
      label:'浈江区'
    },{
      value:'武江区',
      label:'武江区'
    },{
      value:'曲江区',
      label:'曲江区'
    },{
      value:'乐昌市',
      label:'乐昌市'
    },{
      value:'南雄市',
      label:'南雄市'
    },{
      value:'始兴县',
      label:'始兴县'
    },{
      value:'仁化县',
      label:'仁化县'
    },{
      value:'翁源县',
      label:'翁源县'
    },{
      value:'新丰县',
      label:'新丰县'
    },{
      value:'乳源瑶族自治县',
      label:'乳源瑶族自治县'
    },{
      value:'其他',
      label:'其他'
    }]
  },{
    value:'佛山',
    label:'佛山',
    children:[{
      value:'禅城区',
      label:'禅城区'
    },{
      value:'南海区',
      label:'南海区'
    },{
      value:'顺德区',
      label:'顺德区'
    },{
      value:'三水区',
      label:'三水区'
    },{
      value:'高明区',
      label:'高明区'
    },{
      value:'其他',
      label:'其他'
    }]
  }]
}];

function onChange(value) {
  console.log(value);
}

class HomeAdd extends Component {
  render() {
    return (
		<Cascader options={options} onChange={onChange} placeholder="Please select" />
    );
  }
}
export default HomeAdd;
