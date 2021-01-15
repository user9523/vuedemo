<template>
   <div class='box'>
       <div class="urlalert">
       <div class="top">
           <span>新增网址</span>
           <div class="dele">x</div>
       </div>
       <div class="cennter">
           
       </div>
       <div class="buttom">
           3
       </div>
       </div>
   </div>
</template>

<script>

export default {
components: {

},
setup() {
   return {

       }
   }
}
</script>
<style scoped>
.box{
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
.urlalert{
    position: absolute;
    width: 400px;
    height: 400px;
    top: 40%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 0 2px 2px rgba(146, 134, 134, 0.1);
    display: flex;
    flex-direction: column;
}
.top{
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    position: relative;
}
.dele{
    position: absolute;
    right: 0;
    top: -6px;
    font-size: 24px;
    display: block;
    height: 10px;
    width: 10px;
    line-height: 10px;
}
</style>