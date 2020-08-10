import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import First from './study/redux1/first'
// import store from './study/redux1/store'
// import Second from './study/redux2/second'
// import Second2 from './study/redux3/second'
// import Redux4 from './study/redux4/redux4'
import { Provider } from 'react-redux'
import store from './study/rematch/store'
import Rematch from './study/rematch/rematch'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// 演示最基本的redux
// const render= ()=>{ReactDOM.render(<First />,document.getElementById('root'))};
// render()
// store.subscribe(render)

// serviceWorker.unregister();

//react-redux演示
ReactDOM.render(
    <Provider store={store}>
    <Rematch></Rematch>
    </Provider> ,
   document.getElementById('root'))