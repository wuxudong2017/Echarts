<template>

      <div id="demo3" :style="{width:'500px',height:'500px'}">

      </div>
</template>

<script>
    export default {
        name: "head",
      data(){
          return{
            database:[100,100,100,100,100,100]
          }
      },
      computed:{

      },
      mounted(){
        this.drawLine()
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('demo3'));
          var val=100;
          // 绘制图表
          myChart.setOption({
            backgroundColor:'#022D5A',
            title: {
              text: '在Vue中使用echarts',
              textStyle:{
                color:'#00A4D3'
              }},
            tooltip: {
              show:false
            },
            xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
              axisLine:{
                show:true,
                lineStyle:{
                  color:'#023158'
                }
              },
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#023158'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#00C2F5',
                  fontWeight: 'normal',
                  fontSize: '12',
                },
              },
            },
            yAxis: {
              min:'0',
              max:val,
              axisLine:{
                show:true,
                lineStyle:{
                  color:'#023158'
                }
              },
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#023158'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#00C2F5',
                  fontWeight: 'normal',
                  fontSize: '12',
                },
              },

            },
            series: [
              /*柱状图背景*/
              {
                type:'bar',
                z:1,
                itemStyle:{
                  color:['rgba(0,0,0,0.5)']
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: this.database,
                animation: false,
                itemStyle: {
                  color:"#135D8C"
                }

              },

              {
              name: '销量',
              type: 'bar',
                z:2,
              data: [5, 20, 36, 10, 10, 20],
              /*颜色渐变*/
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {offset: 0, color: '#00d386' },//0% 处的颜色
                    {offset: 1, color: '#0076fc'}// 100% 处的颜色
                    ],
                  globalCoord: false
                }
              }
            },
            ]
          });
        }
      }
    }
</script>

<style scoped>
.header{

}
  #demo1{
    width: 500px;
    height: 500px;
  }



</style>
