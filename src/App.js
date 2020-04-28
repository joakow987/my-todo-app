import React from 'react';
import {TextField, Button, Grid} from '@material-ui/core'
import './App.css';
import Todos from './Components/Todos';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [], // array de [{name: "name", list: todos}
            inputValue: "",
            todos: {}, // {listName: [todos]}
            currentList: ""
        }
    }
    startTodoList = event => {
        event.preventDefault();
        this.setState(prevState => ({
            currentList: this.state.inputValue,
            inputValue: "",
            lists: prevState.lists.includes(this.state.inputValue) ? [...prevState.lists] : [...prevState.lists, this.state.inputValue],
            todos: prevState.lists.includes(this.state.inputValue) ? {...prevState.todos} : {...prevState.todos, [this.state.inputValue]: []}
        }))
    }
    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            inputValue: event.target.value
        })
    }

    addTodo = (event) => {
        console.log(this.state);
        if (this.state.inputValue !== "") {
            this.setState(prevState => ({
                inputValue: "",
                todos: {
                    ...prevState.todos, [this.state.currentList]: [...prevState.todos[this.state.currentList], {value: this.state.inputValue, checked: false}]
                }
            }))
        }
    }

    handleCheckboxClick = ({value, checked}) => {
        this.setState(prevState => ({
            todos: {...prevState.todos, [this.state.currentList]: prevState.todos[this.state.currentList].map(todo => value === todo.value ? {value, checked: !checked} : todo)}
        }))
    }

    finishEdit = (event) => {
        event.preventDefault();
        this.setState({
            inputValue: "",
            currentList: ""
        })
    }
    render() {

        return (
            <Grid id="app" container justify="center">
                {this.state.currentList
                    ?
                    <div>
                        <form onSubmit={this.finishEdit}>
                            <div className="inputBox">
                                <TextField id="outlined-basic" variant="outlined" onChange={this.handleInputChange} value={this.state.inputValue} />
                            </div>
                            <Button id="submitButton" variant="contained" color="primary" onClick={this.addTodo}>Add a todo</Button>
                            <Button id="finishButton" variant="contained" color="primary" type="submit">Finish list</Button>
                        </form>
                        <Todos todos={this.state.todos[this.state.currentList]} onClick={this.handleCheckboxClick} />
                    </div>
                    :
                    < form onSubmit={this.startTodoList}>
                        <div id="inputField">
                            <TextField label="Add a list name" variant="outlined" onChange={this.handleInputChange} value={this.state.inputValue} />
                        </div>
                        <Button id="appButton" variant="contained" color="primary" type="submit">Add a list</Button>
                    </form>
                }
            </Grid>
        )
    }
}

export default App;
