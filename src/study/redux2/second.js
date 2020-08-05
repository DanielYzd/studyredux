// 基于react-redux的改造
import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'

// 写一个返回数据的方法，供connect使用，connect会帮我们把数据转换成props
const  mapStateToProps = (state, ownProps) => {
    return {
        prop: state
    }
}
// 写⼀个返回dispatch⽅法的⽅法供connect使⽤，connect帮我们把dispatch转换成props
const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add:()=>dispatch({type:'add'}),
        reduce:()=>dispatch({type:'reduce'}),
        slice:()=>dispatch({type:'slice'}),
        empty:()=>dispatch({type:'empty'}),
        refuzhi:()=>dispatch({type:'refuzhi'}),
    }
}
const second=(props)=> {
    console.log(props)
    return (
        <div>

            <h1>{props.prop.name}</h1>
            <Button type="primary" onClick={()=>{props.add()}}>改变1</Button>
            <Button type="primary" onClick={()=>{props.reduce()}}>改变2</Button>
            <Button type="primary" onClick={()=>{props.slice()}}>删除</Button>
            <Button type="primary" onClick={()=>{props.empty()}}>清空</Button>
            <Button type="primary" onClick={()=>{props.refuzhi()}}>重置</Button>
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(second)
