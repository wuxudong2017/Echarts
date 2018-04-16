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
                text:'折线图',
                textStyle:{
                  color:"#00A8F9"
                }
              }
            })

          }
        }





    }
</script>

<style scoped>

</style>
