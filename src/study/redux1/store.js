import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initState={
    name:'yzd',
    yearsold:22,
    sex:true,
    arr:[1,2,4]
}
const reducer = (state=initState,action)=>{
    console.log(action)
    console.log(state)
    switch(action.type){
        case 'add':
            return {
                ...state,
                name:'lll',
                ll:'ddd'
            }
        case 'reduce':
            return {
                ...state,
                name:'hahaha'
            };
        case 'slice':
            return {
                ...state,
                arr:state.arr.slice(1)
            }
        case 'empty':
            return {

            }
        case 'refuzhi':
            return {
                 name:'8989',
                 arr:[12,55,77]       
            }
        default:
            return state
    }
}
const store = createStore(reducer,applyMiddleware(thunk
    ,logger))
export default store