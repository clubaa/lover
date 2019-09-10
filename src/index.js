import React from 'react';
import ReactDOM from 'react-dom';
import axios from  './utils/axios.js'
import RootRouter from './router';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
ReactDOM.render(<RootRouter></RootRouter>, document.getElementById('root'));
React.Component.prototype.$axios = axios
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
