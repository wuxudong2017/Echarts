<template>
  <div class="wrap">
    <div id="bar" >
    </div>
  </div>

</template>

<script>
    export default {
        name: "bar",
        mounted(){
          this.drop()
        },
      methods:{
          drop(){
             let mychart=this.$echarts.init(document.getElementById('bar'));
             mychart.setOption({
               title:{
                 text:'vue-title',
                 textStyle:{
                   color:'#41B7D3'
                 }
               },
              xAxis:{
                  axisLine:{
                    show:false
                  },
                axisLabel:{
                    show:false
                },
                splitLine:{
                    show:false
                }
              },
               yAxis:{
                 show:true,
                 data:['北京市','天津市','河北省','陕西省'],
                 axisLabel:{
                   textStyle:{
                     color:'#41B7D3',
                     fontSize:'14',
                     fontWeight:'bolder'
                   }
                 },
                 axisTick:{
                   show:false
                 },
                 axisLine:{
                   show:false,
                   lineStyle:{
                     color:'#fff'
                   }
                 },
                 splitLine:{
                   show:false
                 }
               },
               series:[{
                 type:'bar',
                 barWidth:'70%',
                 z:1,
                 data:[100,100,100,100],
                 itemStyle:{
                   color:'#1A669A'
                 },
                 barGap:'-100%',
                 barCategoryGap:'40%',
                 animation:true
               },{
                 type:'bar',
                 z:3,
                 itemStyle:{
                   color:'#41B8D4'
                 },
                 label:{
                   show:true,
                   position:'right',
                   color:'#02F3F7',
                   formatter:'{c}%'
                 },
                 barWidth:'70%',
                 data:[60,70,80,60]


               }]



             })



          }
      }



    }
</script>

<style scoped>
.wrap{
  width: 500px;
  height: 200px;
}
  #bar{
    width: 100%;
    height: 100%;

  }
</style>
