//实现异步方法
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
@connect (
    state=>({prop:state}),
    dispatch=>({
    add:()=>dispatch({type:'add'}),
    reduce:()=>dispatch({type:'reduce'}),
    slice:()=>dispatch({type:'slice'}),
    empty:()=>dispatch({type:'empty'}),
    refuzhi:()=>dispatch({type:'refuzhi'}),
    async:()=>setTimeout(()=>dispatch({type:'empty'}),2000)
    })
)
class Second extends Component{
    render(){
        return (
            <div>
                <h1>使用装饰器改造</h1>
                <h1>{this.props.prop.name}</h1>
                <Button type="primary" onClick={()=>{this.props.add()}}>改变1</Button>
                <Button type="primary" onClick={()=>{this.props.reduce()}}>改变2</Button>
                <Button type="primary" onClick={()=>{this.props.slice()}}>删除</Button>
                <Button type="primary" onClick={()=>{this.props.empty()}}>清空</Button>
                <Button type="primary" onClick={()=>{this.props.refuzhi()}}>重置</Button>
                <Button type="primary" onClick={()=>{this.props.async()}}>延迟清空</Button>
            </div>
        )
    }
   
}




export default Second
