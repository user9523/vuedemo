<template>
   <div class='box' v-show="state.isShow">>
       <div class="urlalert">
       <div class="top">
           <span>新增网址</span>
           <span class="close-url-alert" @click="cancel"/>
       </div>
       <div class="cennter">
           <lp-input class="lp-input-container" :value="state.url" @_input="inputUrl" placeholder="请输入URL"></lp-input>
           <lp-input class="lp-input-container" :value="state.name" @_input="inputName" placeholder="请输入名称"></lp-input>
           <selectIcon/>
       </div>
        <div class="bottom">
            <div class="btn-group">
                <lp-button @_click="cancel" type="danger" class="btn-cancel">取消</lp-button>
                <lp-button @_click="confirm" type="success" class="btn-confirm">确认</lp-button>
            </div>
          </div>
       </div>
   </div>
</template>

<script>
import lpInput from '/@/components/lpinput/lpinput.vue'
import lpButton from '../lp-button/lp-button.vue'
import {useStore} from 'vuex'
import {inject,ref} from 'vue'
import selectIcon from '/@/components/selectIcon/selectIcon.vue'
export default {
components: {
    lpInput,
    lpButton,
    selectIcon
},
setup() {
    const store = useStore()
    console.log('store')
    console.log(store)
    const state = store.state.moduleUrl
    const $message = inject('message')
    // 关闭弹框
        function cancel() {
            store.commit('changeUrlInfo', [
                {key: 'url', value: ''},
                {key: 'icon', value: ''},
                {key: 'isShow', value: false},
                {key: 'name', value: ''},
                {key: 'isLoadingIcon', value: false},
                {key: 'isLoadingName', value: false},
                {key: 'whichTag', value: -1},
                {key: 'imgErr', value: false},
                {key: 'otherIcon', value: ''},
                {key: 'id', value: -1}
            ])
        }
                // 确认添加URL 或 确认修改URL
        function confirm() {
            debugger
            if(state.url == '') {
                $message({
                    type: 'warning',
                    content: 'URL不能为空'
                })
                return;
            }
            if(state.alertType == '新增网址') {
                store.commit('add', {
                    key: '2',
                    value: {
                        name: state.name,
                        icon: state.icon,
                        url: state.url,
                        whichTag: state.whichTag
                    }
                })
                $message({
                    type: 'success',
                    content: '网址添加成功'
                })
            } else if(state.alertType == '修改网址') {
                store.commit('update', {
                    key: 'catalogue',
                    value: {
                        id: state.id,
                        name: state.name,
                        icon: state.icon,
                        url: state.url,
                    }
                })
                $message({
                    type: 'success',
                    content: '网址修改成功'
                })
            }
            
            cancel()
        }
                // URL输入框内容改变事件
        function inputUrl(value) {
            store.commit('changeUrlInfo', {
                key: 'url',
                value
            }) 
        }
        // Name输入框内容改变事件
        function inputName(value) {
            if(typeof value != 'object') {
                store.commit('changeUrlInfo', {
                    key: 'name',
                    value
                })
            }
        }
   return {
       state,
       cancel,
       confirm,
       inputUrl,
       inputName
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
.close-url-alert{
    display: inline-block;
    position: absolute;
    top: -4px;
    right: 10px;
    cursor: pointer;
    color: rgb(133, 122, 122);
}
.close-url-alert:hover{
    color: rgb(51, 49, 49);
}
.close-url-alert::before{
    content: '\2716';
}
.cennter{

    height: 270px;
    overflow: hidden;

}
.lp-input-container{
    width: 300px;
    margin: 10px auto 0;
}
.bottom{
    width: 100%;
    height: 80px;
}
.btn-group{
    height: 80px;
    line-height: 80px;
    float: right;
}
.btn-confirm{
    margin-right: 15px;
}
.btn-cancel{
    margin-right: 30px;
}
</style>