<template>

  <div id="demo2" :style="{width:'500px',height:'500px'}">


  </div>




</template>

<script>
    export default {
        name: "bar1",
      data(){
          return{

          }
      },
      mounted(){
          this.drop1()
      },
      methods:{
          drop1(){
           let mychart1= this.$echarts.init(document.getElementById('demo2'));
            mychart1.setOption({
              title:{
                text:'vue-demo2',
                textStyle:{
                  color:'#00A8F9'
                }
              },
              yAxis:{
                data:['天津市','河南省','陕西省','天津市','河南省','陕西省','天津市','河南省','陕西省'],
                axisLine:{
                  lineStyle:{
                    color:'#223249'
                  }
                },
                axisLabel: {
                  textStyle: {
                    color: '#00C2F5',
                    fontWeight: 'normal',
                    fontSize: '12',
                  },
                },
                splitLine:{
                  show:false,
                  lineStyle:{
                    color:'#023158'
                  }
                },
              },
              xAxis:{
                  min:0,
                  max:50,
                axisLine:{
                  lineStyle:{
                    color:'#223249'
                  }
                },
                splitLine:{
                  show:false,
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
              series:[{
                type:'bar',
                barWidth:'40%',
                z:2,
                label:{
                  normal:{
                    show:true,
                    position:'insideRight'
                  }
                },
                data:[10,20,14]
              },{
                type:'bar',
                barWidth:'40%',
                z:1,
                label:{
                  normal:{
                    show:true,
                    position:'insideRight'
                  }
                },
                data:[25,26,41,25,26,4,25,26,41],
                barGap:'-100%',
                barGateGoryGap:'40%'
              }],
              color:['#EAFF00','#25AB3B']
              /*结束*/
            })
          }



      }



    }
</script>

<style scoped>




</style>
