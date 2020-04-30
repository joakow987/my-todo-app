import React from 'react';
import {TextField, Button, Grid, MenuList} from '@material-ui/core'
import './App.css';
import Todos from './Components/Todos';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [], // array de names 
            inputValue: "",
            todos: {}, // objeto de key: list pair
            currentList: ""
        }
    }
    startTodoList = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            lists: this.state.lists.includes(this.state.inputValue) ? this.state.lists : [...this.state.lists, this.state.inputValue],
            inputValue: "",
            currentList: this.state.inputValue,
            todos: this.state.lists.includes(this.state.inputValue) ? this.state.todos : {...this.state.todos, [this.state.inputValue]: []}
        }))
    }
    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    addTodo = (event) => {
        event.preventDefault();
        if (this.state.inputValue !== "") {
            this.setState(prevState => ({
                inputValue: "",
                todos: {...prevState.todos, [this.state.currentList]: [...prevState.todos[this.state.currentList], {value: this.state.inputValue, checked: false}]}
            }))
        }
    }

    deleteTodo = () => {

    }

    handleCheckboxClick = ({value, checked}) => {
        this.setState(prevState => ({
            todos: {...prevState.todos, [this.state.currentList]: prevState.todos[this.state.currentList].map(todo => value === todo.value ? {value, checked: !checked} : todo)}
        }))
    }

    finishList = () => {
        this.setState({
            currentList: ""
        })
    }

    deleteTodo = (value) => {
        this.setState({
            todos: {...this.state.todos, [this.state.currentList]: this.state.todos[this.state.currentList].filter(todo => todo.value !== value)}
        })
    }
    render() {
        return (
            <Grid id="app" container justify="center">
                <MenuList />
                {this.state.currentList
                    ?
                    <div>
                        <form onSubmit={this.finishList}>
                            <div className="inputBox">
                                <TextField id="outlined-basic" variant="outlined" onChange={this.handleInputChange} value={this.state.inputValue} />
                            </div>
                            <Button id="submitButton" variant="contained" color="primary" onClick={this.addTodo}>Add a todo</Button>
                            <Button id="finishButton" variant="contained" color="primary" type="submit">Finish list</Button>
                        </form>
                        <Todos todos={this.state.todos[this.state.currentList]} onClick={this.handleCheckboxClick} onDeleteIconClick={this.deleteTodo} />
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
