import React from 'react'
import store from './store'
import {Button} from 'antd'

export default function first() {
    return (
        <div>
            <h1>{store.getState().name}</h1>
            <h1>{store.getState().ll}</h1>
            {store.getState().arr.map((item,key)=>{
                return <h1 key={key}>{item}</h1>
            })}
            <Button onClick={()=>store.dispatch({type:'add'})}>改变1</Button>
            <Button onClick={()=>store.dispatch({type:'reduce'})}>改变2</Button>
            <Button onClick={()=>store.dispatch({type:'slice'})}>改变3</Button>
            <Button onClick={()=>store.dispatch({type:'empty'})}>清空</Button>
            <Button onClick={()=>store.dispatch({type:'refuzhi'})}>重新赋值</Button>
        </div>
    )
}
