import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import MyRoutes from './Routes';


import registerServiceWorker from './registerServiceWorker';





ReactDOM.render(<MyRoutes />, document.getElementById('root'));
registerServiceWorker();
