
import { createStore } from 'vuex'
import { updatelocal } from '../utils/utils'
 
 
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
            for (let i = 0; i < length1; i++) {
                let currennt  = catalogue[i]
                if(currennt.id == value.id.split('.')[0]){
                    // 修改的是标签信息
                    if(currennt.id == value.id){
                        currennt.name = value.name
                        currennt.icon = value.icon
                        updatelocal(store)
                    } else {
                        let URLS =  currennt.URLS
                        let length2 = currennt.length
                        for (let j = 0; j < length2; j++) {
                            const URL = URLS[j];
                            if(URL.id == value.id){
                                URL.url = value.url
                                URL.name = value.name
                                URL.icon = value.icon
                                updatelocal(store)
                                break
                            }
                        }
                    }
                    break
                }
                
            }
        }
       },
       // 移除(根据id来移除)

    }
    // modules: {
    //     moduleTab,
    //     moduleUrl,
    //     moduleSearch
    // }
})
 
 
export default store
// const app = createApp({ /* your root component */ })
 
 
// // 通过 use 注册插件
// app.use(store)