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
/**
 * 对于 setup 函数来说，它接收两个参数，分别为：
 * props:  通过 prop 传递过来的所有数据，我们都可以在这里进行接收。并且获取到的数据将保持响应性。
 * context: context 是一个 JavaScript 对象，这个对象暴露了三个组件的属性 context <=>  { attrs, slots, emit } 可以解构出来使用
 * attrs : 它是绑定到组件中的 非 props 数据，并且是非响应式的。
 * slots : 是组件的插槽，同样也不是 响应式的。
 * emit : 是一个方法，相当于 vue2 中的 this.$emit 方法。 
 */
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
        box-sizing: border-box;
    }
    .isshoes{
        cursor: auto;
        box-shadow: 0 0 6px #53aee3;
    }
    .clear::before{
    content: '\2716';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, -50%);
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    color: #666;
}
</style>