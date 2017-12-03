import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFlag: false,
      addTodo: '',
      todos: []
    }

    this.todoForm = this.todoForm.bind(this);
    this.addTodo = this.addTodo.bind(this);
    // this.deleteTodo = this.deleteTodo.bind(this);


  }
  todoForm(ev) {
    this.setState({
      addTodo: ev.target.value
    });
  }
  addTodo(ev) {
    let todosClone = this.state.todos;
    todosClone.push(this.state.addTodo);
    this.setState({
      todos: todosClone,
      addTodo: ''
    });
  }
  deleteTodo(key, ev) {

    let todosClone = this.state.todos;
    todosClone.splice(key, 1);
    this.setState({
      todos: todosClone
    })
  }

  editTodo(key, ev) {
    console.log(key, ev);
    let todosClone = this.state.todos;

    this.setState({
      addTodo: todosClone[key],
      editFlag: true
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.addTodo} onChange={this.todoForm} />

        {
          (this.state.editFlag)?
          (<button onClick={this.addTodo}>Update</button>) :
          (<button onClick={this.addTodo}>Add Todo</button>)
        
        }


        {
          this.state.todos.map((todo, abc) => {
            return (
              <h1 key={abc}>{todo}
                <button onClick={this.deleteTodo.bind(this, abc)}>Delete</button>
                <button onClick={this.editTodo.bind(this, abc)}>Edit</button>
              </h1>
            )
          })
        }


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
