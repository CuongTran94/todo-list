import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = (props) => {
    return (
        <div className="todo-main">
            <TodoItem {...props} />
        </div>
    );
}

export default TodoList;