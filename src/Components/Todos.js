import React from 'react';
import '../ComponentsCSS/Todos.css';

// bez () => w onChange

function Todos(props) {
    function addMyStyle(checked) {
        return {
            textDecoration: checked ? "line-through" : 'none'
        }

    }

    return (

        <div>
            {props.todos.map((todo, index) => {
                return (
                    <div className="todo" key={index} style={addMyStyle(todo.checked)}  >
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => props.onClick(todo)} />
                        <span id="todoValue">{todo.value}</span>
                    </div>
                )
            })}
        </div>

    )
}

export default Todos;