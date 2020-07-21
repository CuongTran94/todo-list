import React, { useState } from 'react';
import { List, Checkbox, Button, Input } from 'antd';
import { PropTypes } from 'prop-types';
import './style.scss';

const TodoItem = (props) => {
    const { todoList, onMarkCompleted, onDeleteTask, onUpdateTask } = props;
    const [open, setOpen] = useState('');
    const [value, setValue] = useState('');

    const handleCompleted = (taskId) => {
        if(onMarkCompleted) {
            onMarkCompleted(taskId);
        }
    }

    const handleDeleteTask = (taskId) => {
        if(onDeleteTask) {
            onDeleteTask(taskId);
        }
    }

    const handleEditTask = (taskId) => {
        if(onUpdateTask) {
            onUpdateTask(taskId, value);
        }
        setOpen('');
    }

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (id, title) => {
        setValue(title);
        setOpen(id);
    }

    return (
        <List 
            itemLayout="horizontal"
            className="todo-list"
            dataSource={todoList}            
            renderItem={item => (
                <List.Item
                    className="todo-item"
                >
                    {
                        open !== item.id ? 
                        <React.Fragment>
                        <Checkbox 
                            className="todo-toggle" 
                            checked={item.isComplete} 
                            onChange={() => handleCompleted(item.id)} 
                        />
                        <span 
                            className={item.isComplete ? "todo-task active" : "todo-task"}
                            onDoubleClick={() => handleClick(item.id, item.title)}
                        >
                            {item.title}
                        </span>
                        <Button className="todo-delete" onClick={() => handleDeleteTask(item.id)} />
                        </React.Fragment>
                        : <Input 
                            className="todo-edit"
                            value={value}
                            onBlur={() => handleEditTask(item.id)}
                            onChange={handleValueChange}
                        />
                    }
                </List.Item>
            )}
        />
    );
}

TodoItem.propTypes = {
    todoList: PropTypes.array,
    onMarkCompleted: PropTypes.func,
    onDeleteTask: PropTypes.func,
    onUpdateTask: PropTypes.func,
}

TodoItem.defaultProps = {
    todoList: [],
    onMarkCompleted: null,
    onDeleteTask: null,
    onUpdateTask: null
}

export default TodoItem;