import React from 'react';
import '../ComponentsCSS/Todos.css';

// bez () => w onChange

function Todos({todos, onClick}) {

    function addMyStyle(checked) {
        return {
            textDecoration: checked ? "line-through" : 'none'
        }

    }

    return (
        <div>
            {todos ? todos.map((todo, index) => {
                return (
                    <div className="todo" key={index} style={addMyStyle(todo.checked)}  >
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => onClick(todo)} />
                        <span id="todoValue">{todo.value}</span>
                    </div>
                )
            })
                : null}
        </div>

    )
}

export default Todos;