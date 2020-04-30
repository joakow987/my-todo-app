import React from 'react';
import '../ComponentsCSS/Todos.css';
import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



function Todos({todos, onClick, onDeleteIconClick}) {

    function addMyStyle(checked) {
        return {
            textDecoration: checked ? "line-through" : 'none'
        }

    }

    return (
        <div>
            {todos ? todos.map((todo, index) => {
                return (
                    <Grid container className="todo" key={index} style={addMyStyle(todo.checked)} >
                        <Grid item xs={8}>
                            <input
                                type="checkbox"
                                checked={todo.checked}
                                onChange={() => onClick(todo)} />
                            <span id="todoValue">{todo.value}</span>
                        </Grid>
                        <Grid item xs={4}>
                            <IconButton aria-label="delete" onClick={() => onDeleteIconClick(todo.value)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>

                    </Grid>
                )
            })
                : null}
        </div>

    )
}

export default Todos;