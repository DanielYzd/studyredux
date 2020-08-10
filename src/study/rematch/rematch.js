import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

@connect(
    
    // 在第一个参数里将count这个state中的count属性赋给App组件的this.props.count
    state=>({state}),
     // 在第二个参数里将count这个state中的increment/incrementAsync两个方法
  // 赋给App组件中的this.props.increment/this.props.incrementAsync
    dispatch => ({
        increment: dispatch.count.increment,
        incrementAsync: dispatch.count.incrementAsync,
        change:dispatch.test.increment,
        changeAsync: dispatch.test.incrementAsync,
    })
)
 class rematch extends PureComponent {
     
    render() {
        console.log(this.props)
        const {state,increment,incrementAsync,change,changeAsync} =this.props
        console.log(state)
        return (
            <div>
                <h1>{state.count.count}</h1>
                <h1>{state.test.name}</h1>
                <button onClick={()=>increment(111)}>increment</button>
                <button onClick={incrementAsync}>incrementAsync</button>
                <button onClick={change}>change</button>
                <button onClick={changeAsync}>changeAsync</button>
            </div>
        )
    }
}
export default rematch