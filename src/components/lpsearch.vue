<template>
   <div class='inputhook'>
       <input 
        :class="['inputstyle',{'isshoes' : isok}]"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @input="inputvalue"
        @focus="inputFocus"
        @blur="inputBlur"
        @compositionstart="virtualInputStart"
        @compositionend="virtualInputEnd"
        :value="value"
        type="text"
        >
        <span class="clear" v-show="value == '' ? false : true" @click="clearValue"/>
   </div>
</template>

<script>
import { ref } from 'vue'
export default {
name: 'lp-input',
props:{
    value:{
        type: String,
        default: ''
    },
    placeholder:{
        type: String,
        default: '请输入搜索标签'
    },
    maxlength:{
        type: String,
    }
},
setup(props,context) {
    // 简单地把 ref(obj) 理解为这个样子 reactive({value: obj})
    let isok = ref(false)  // 判断是否聚焦
    let  isVirtual = ref(false) // 判断是否虚拟输入
    // 输入框改变内容事件
    function inputvalue(e){ 
        if(!isVirtual.value){
            context.emit('_input',e.target.value)
        }
    }
    // 输入框聚焦事件
    function inputFocus(){
        isok.value = true
    } 
    // 失去焦点事件
    function inputBlur(){
        isok.value = false
    }
    // 虚拟输入开始事件
    function virtualInputStart(){
        isVirtual.value = true
    }
    // 虚拟输入结束事件
    function virtualInputEnd(e){
        isVirtual.value = false
        context.emit('_input',e.target.value)
    }
    // 清除输入框事件
    function clearValue(){
       context.emit('_input','')
    }
   return {
       isok,
       inputvalue,
       inputFocus,
       inputBlur,
       virtualInputStart,
       virtualInputEnd
     }
   }
}
</script>
<style  scoped>
    .inputhook{
        margin: 0;
        position: relative;
        height: 50px;
        width: 400px;
        display: inline-block;
    }
    .inputstyle{
        width: 100%;
        height: 100%;
        padding-left: 20px;
    }
</style>