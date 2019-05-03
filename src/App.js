import React, {Component} from 'react';  
import './App.css';
import Todos from './Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      curval: "",
      todos: []
    }  
  }
  
 

  handleChange = (e)=>{
    this.setState({
      curval: e.target.value
    })
  }

  onSubmit  = (e) => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.curval],
      curval: ""
     })
  }

  deleteTodo = (e) => {
	  var index = parseInt(e.target.name);
	  let newTodos = [...this.state.todos]
	  newTodos.splice(index, 1);
	  console.log(`deleting ${index} `);
	  this.setState({
		todos: newTodos
	  })
  }
  
  componentDidUpdate(){
    //console.log(this.state.todos);
  }
  render()
  {
    return (
      <div className="App">
      
          <h1>Ultimate TodoList</h1>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.curval} onChange={this.handleChange} /> 
            <input type="submit" />  
          </form>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
      </div>
    );
  }
}

export default App;
