import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>

        <ul>
          <li><Link to="/about/Haider">Haider</Link></li>
          <li><Link to="/about/Ali">Ali</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;




// <div className="container">
// <nav className="navbar navbar-default">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//       <NavLink className="navbar-brand" href="#">Project name</NavLink>
//     </div>
//     <div id="navbar" className="navbar-collapse collapse">
//       <ul className="nav navbar-nav">
//         <li className="active"><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="about">About</NavLink></li>

//       </ul>

//     </div>
//   </div>
// </nav>




// </div>
