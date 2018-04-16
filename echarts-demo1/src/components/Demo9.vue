<template>
   <div id="Demo8" :style="{width:'500px',height:'500px'}"></div>
</template>

<script>
    export default {
        name: "demo8",
        mounted(){
          this.drop()
        },
        methods:{
          drop(){
            let mychart=this.$echarts.init(document.getElementById('Demo8'));
            mychart.setOption({
              title:{
                text:'line',
                textStyle:{
                  color:"#00A8F9"
                }
              },
              xAxis:{
                data:[1,2,3,4,5,6],
                axisLine:{
                  lineStyle:{
                    color:"#155372"
                  }
                },
                axisLabel:{
                  color:"#03ECEE",
                  type:"dashed"
                },
                axisTick:{
                  show:false
                },


              },
              yAxis:{
                axisLine:{
                  show:false,
                },
                axisTich:{
                  show:false
                },
                axisLabel:{
                    color:"#03ECEE",
                },
                splitLine:{
                  show:true,
                  lineStyle:{
                    color:["#155372"],
                    type:'dotted'

                  }
                },
                data:[1,2,3,4,5,6]
              },
              series:[{
                type:'line',
                z:1,
                data:[1,3,4,2,5,4],
                itemStyle:{
                  color:"#C1203C"
                }
              },
                {
                  type:'line',
                  z:2,
                  data:[4,5,2,4,3],
                  itemStyle:{
                    color:"#8DE05F"
                  }
                }]

            })

          }
        }





    }
</script>

<style scoped>

</style>
