import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Forecast from './components/forecast';
import Detail from './components/detail'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/forecast/:city" component={Forecast}/>
            <Route path="/detail/:city" component={Detail}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
