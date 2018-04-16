<template>
   <div id="Demo9" :style="{width:'500px',height:'500px'}"></div>
</template>

<script>
    export default {
        name: "demo8",
        mounted(){
          this.drop()
        },
        methods:{
          drop(){
            let mychart=this.$echarts.init(document.getElementById('Demo9'));
            mychart.setOption({
              title:{
                text:'line',
                textStyle:{
                  color:"#00A8F9"
                }
              },
              legend:{
                type:'plain',
                textStyle:{
                  color:"#78D8E2"
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
              },
                {
                  type:'line',
                  z:2,
                  data:[4,5,2,4,3],
                }],
              //color:['#DA2240','#84D35B']

            })

          }
        }





    }
</script>

<style scoped>

</style>
