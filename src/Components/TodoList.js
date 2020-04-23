import React from 'react';
import '../ComponentsCSS/App.css';
import Todos from './Todos'
import {TextField, Button, Grid} from '@material-ui/core'


class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: []
    }
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputValue !== "") {
      this.setState(prevState => ({
        inputValue: "",
        todos: [...prevState.todos, {value: this.state.inputValue, checked: false}]
      }))
    }
  }

  handleCheckboxClick = ({value, checked}) => {
    this.setState({
      todos: this.state.todos.map(todo => value === todo.value ? {value, checked: !checked} : todo)
    })
  }

  render() {
    return (
      <Grid className="App" container justify="center">
        <form onSubmit={this.handleSubmit}>
          <div className="inputBox">
            <TextField id="outlined-basic" variant="outlined" onChange={this.handleChange} value={this.state.inputValue} />
          </div>
          <Button id="submitButton" variant="contained" color="primary" type="submit">Add a todo</Button>
        </form>
        <Todos todos={this.state.todos} onClick={this.handleCheckboxClick} />
      </Grid>
    );
  }
}

export default TodoList;
