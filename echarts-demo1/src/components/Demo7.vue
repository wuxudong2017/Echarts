<template>
  <div>
    <div id="test2" :style="{width:'500px',height:'500px'}"></div>
  </div>
</template>
<script>

    export default {
        name: "test",
      data(){
          return{
            msg:""
          }
      },
      mounted(){
          this.drop()
      },
      methods:{
          drop(){
            let myChart=this.$echarts.init(document.getElementById('test2'));
            var _this=this
            this.$http.get('src/map/json/province/henan.json').then(function(res){
              _this.$echarts.registerMap('henan',res.data)
              myChart.setOption({
                title:{
                  text:"Hello Vue",
                  textStyle:{
                    color:"green"
                  }
                },
                series:[{
                  type:'map',
                  map:'henan',
                  label:{
                    show:true,
                    color:'#00A4C9',
                    fontSize:12,
                    align:'center'
                  },
                  itemStyle:{
                    show:true,
                    areaColor:{
                      type:'linear',
                      x:0,
                      y:0,
                      x2:1,
                      y2:1,
                      colorStops:[{
                        offset:0,color:'#008BD3'
                      },{
                        offset:1,color:'#0058A8'
                      }],
                      globalCoord: false // 缺省为 false
                    }
                  },
                }]
              })
            })
          }
      }
    }
</script>

<style scoped>

</style>
