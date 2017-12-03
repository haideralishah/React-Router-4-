import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';

import App from './App';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
// import Nothing from './Nothing';

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar />
            <hr />
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact/:username" component={Contact} />
            {/*<Route component={Nothing} />*/}

        </div>
    </Router>
)

export default MyRoutes;