<template>
    <div :class="[
            'inputbox', 
            'animate__animated', 
            {'animate__bounceInDown': moduleSearch.isSearch}, 
            {'animate__fadeOutUpBig': !moduleSearch.isSearch}]"
        >
        <div class="input">
            <div class="off" @click="offclick()">关闭</div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
        setup() {
          return{
        }
    }
}
</script>
<style  scoped>
.inputbox{
    position: absolute;
    bottom: -65px;
    left: 50%;
    width: 350px;
    height: 50px;
    line-height: 0;
    transform: translate(-50%, 0);
    z-index: 998;
}
.input{
    margin: 0;
    width: 300px;
    display: inline-block;
    height: 50px;
    position: relative;
}
.inputstyle{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.off{
    display: inline-block;
    height: 50px;
    width: 50px;
    text-align: right;
    line-height: 50px;
    color: rgb(194, 184, 184);
}
</style>