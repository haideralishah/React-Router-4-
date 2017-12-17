import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import CreatePoll from './container/CreatePoll';
import Polling from './container/Poll';

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar />
            <hr />
            <Route exact path="/" component={CreatePoll} />
            <Route path="/createpoll" component={CreatePoll} />
            <Route path="/:pollname" component={Polling} />
            {/*<Route path="/contact/:username" component={Contact} />*/}
            {/*<Route component={Nothing} />*/}

        </div>
    </Router>
)

export default MyRoutes;