export default{
    state:{
        name:'yzd'
    },
    reducers: {
        // 在这里对state进行“纯”的修改
        // 什么是纯函数：https://juejin.im/post/5b4f5c0be51d4518f543f802
        increment(state, payload) {
          // return {...state, name: '222'}
          state.name="fakgk"
          return state
        },
        asyncchange(state,payload){
          return {...state,name:'4555'}
        }
      },
    effects: {
        // 在这里进行不“纯”的操作，然后使用取得的数据再去调用reducers进行“纯”的修改
        // 异步调用应该写在这里，你可以使用async/await来方便的进行异步处理
        async incrementAsync(payload, rootState) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          this.asyncchange(payload)
         
        }
      }
}