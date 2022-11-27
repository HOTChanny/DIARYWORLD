import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
//import { Provider } from 'react-redux';
//import 'antd/dist/antd.css';
//import { applyMiddleware, createStore } from 'redux';
//import promiseMiddleware from 'redux-promise';
//import ReduxThunk from 'redux-thunk';
//import Reducer from './_reducers';

//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
//위에꺼 추가한거


/*
ReactDOM.render(
    <React.StrictMode>
    <Provider 
      store={createStoreWithMiddleware(Reducer)}
    >
    {프로바이더 안에 앱 넣음, 수정할때 필요하면 빼서 주석처리 }
    <App/>
    </Provider>
    </React.StrictMode>,
    document.getElementById('root')

);
*/

ReactDOM.render(
<App/>, document.getElementById('root')

);