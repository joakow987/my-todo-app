import React from 'react';
import {TextField, Button, Grid} from '@material-ui/core'
import './App.css';
import Todos from './Components/Todos';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            displayTodoList: false,
            inputValue: "",
            todos: []
        }
    }
    addTodoList = () => {
        this.setState(prevState => ({
            displayTodoList: true,
            inputValue: "",
            lists: [...prevState.lists, {name: this.state.inputValue, list: []}]
        }))
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
            <Grid id="app" container justify="center">
                {this.state.displayTodoList
                    ?
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="inputBox">
                                <TextField id="outlined-basic" variant="outlined" onChange={this.handleChange} value={this.state.inputValue} />
                            </div>
                            <Button id="submitButton" variant="contained" color="primary" type="submit">Add a todo</Button>
                        </form>
                        <Todos todos={this.state.todos} onClick={this.handleCheckboxClick} />
                    </div>
                    :
                    < form onSubmit={this.addTodoList}>
                        <div id="inputField">
                            <TextField label="Add a list name" variant="outlined" onChange={this.handleChange} value={this.state.inputValue} />
                        </div>
                        <Button id="appButton" variant="contained" color="primary" type="submit">Add a list</Button>
                    </form>
                }
            </Grid>
        )
    }
}

export default App;
