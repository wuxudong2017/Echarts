<template>
    <div id="role" :style="{width:'500px',height:'500px'}">


    </div>
</template>

<script>
    export default {
        name: "role",
      data(){
          return{

          }
      },
      mounted(){
          this.drop()
      },
      methods:{
          drop(){
            var mychart =this.$echarts.init(document.getElementById('role'));
            mychart.setOption({
              title:{
                text:'vue-gaude',
                textStyle:{
                  color:'#00A8F9'
                }
              },
              series:[{
                type:'gauge',
                radius:'100%',
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                pointer: {
                  show: false,
                  length: '0',
                  width: '0'
                },
                axisLine:{
                  show: false,
                  lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                      [0.8, '#00D5FB'],
                      [1, 'rgba(1, 147, 207, 0.3)']
                    ],
                    width: 10
                  }
                },
                detail:{
                  formatter:'{value}%',
                  offsetCenter:[0,'5%']
                },
                data:[{
                  value:80,
                  label:{
                    textStyle:{
                      color:"#fff",
                      fontSize:20
                    }
                  }
                }]
              }]

            })



          }
      }



    }
</script>

<style scoped>

</style>
