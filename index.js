import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './First';
import Second from './Second';
import Product from './Product';
import Talks from './Talks';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.headers.common['MyToken'] = "123sujeet";

axios.interceptors.request.use((req)=>{
console.log('Inside the interceptor')
    return req;
})

axios.interceptors.response.use((res)=>{
    console.log('The response is ',res);
    return res;
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
