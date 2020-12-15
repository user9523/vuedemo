
import { createApp } from 'vue'
import { createStore } from 'vuex'
 
 
// 创建 store 容器实例.
const store = createStore({
    state: {
        navName: '',
        catalogue: null
    },
    mutations: {
        // 更新网页标题
       update(state,changename){
        const {key,value} = changename
        if(key === 'navname') state.navName = value
        else if(key === 'catalogue'){
            const catalogue = state.catalogue
            let length1 = catalogue.length
        }
       }
    }
})
 
 
export default store
// const app = createApp({ /* your root component */ })
 
 
// // 通过 use 注册插件
// app.use(store)