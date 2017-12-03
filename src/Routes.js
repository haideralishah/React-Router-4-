import React from 'react';
import App from './App';
import About from './About';
import {
    Router,
    Route,
    Link
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

const BasicExample = () => (
    <Router history={customHistory}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={App} />
            <Route path="/about/:id" component={About} />
            {/* <Route path="/topics" component={Topics} />  */}
        </div>
    </Router>
)

export default BasicExample