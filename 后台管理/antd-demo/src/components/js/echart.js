import React, {Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '每周统计更新文章数量'},
            tooltip: {trigger: 'axis'},
            legend: {
              data: ['邮件营销']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                  saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
              splitLine: { //设置X轴的网格
                  show: true,
                  interval: 'auto'
              },
              axisLine: { //设置X轴的颜色
                  lineStyle: {
                      color: 'blue'
                  }
              }
            },
            yAxis: {
              type: 'value',
              axisLine: { //设置y轴的颜色
                lineStyle: {
                color: 'blue'
                }
              }
            },
            series: [{
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              smooth: true,
              label: { //设置点数据的提示
                normal: {
                    show: true,
                    position: 'bottom'
                }
              },
              data: [5, 7, 17, 4, 10, 15, 8],
              markPoint: { //设置最大值和最小值
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
              }
            }]//series:
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 500, height: 450 }}></div>
        );
    }
}

export default Echarts;
