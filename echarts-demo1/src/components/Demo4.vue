<template>
  <div id="map" :style="{width:'600px',height:'600px'}"></div>
</template>

<script>
import china from '../map/js/china'

    export default {
        name: "map",
        data(){
          return{
          }

        },
      mounted(){
          this.drop2()
      },
      methods:{
          drop2(){
            let mychart=this.$echarts.init(document.getElementById('map'));
            mychart.setOption({
              title:{
                text:'map',
                textStyle:{
                  color:'#00A8F9'
                }
              },

              // geo:{
              //   show:true,
              //   map:'china',
              //
              // },
              series:[{
                type:'map',
                mapType:'china',
                zoom:1.2,
                label:{
                  show:true,
                  color:'#00A4C9',
                  fontSize:12,
                  align:'center'
                },
                itemStyle: {
                  show: true,
                  areaColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#008BD3' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#0058A8' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              }]

            })

          }


      }





    }
</script>

<style scoped>

</style>
