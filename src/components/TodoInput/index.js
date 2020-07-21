import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { v1 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import './style.scss';

const TodoInput = (props) => {
    const { onSubmitTodo, onCheckAll, isCheckAll } = props;
    const [form] = Form.useForm();
    let className = "toggle-icon";
    if(isCheckAll) {
        className += " active";
    }

    const handleSubmitForm = (values) => {
        if(typeof(values.text) !== 'undefined' && values.text.trim() !== "" && onSubmitTodo) {
            const task = {
                id: uuid(),
                title: values.text                
            };
            form.resetFields();
            onSubmitTodo(task);
        }
        else {
            return;
        }
    }

    const handleCheckAll = () => {
        if(onCheckAll) {
            onCheckAll();
        }
    }

    return (
        <div className="todo-head">
            <Checkbox 
                checked={isCheckAll}
                id="toggle-all" 
                className="toggle-all" 
                onClick={onCheckAll} 
            />
            <label htmlFor="toggle-all" className={className} />
            <Form
                className="todo-form"
                onFinish={handleSubmitForm}
                form={form}
            >
                <Form.Item name="text">
                    <Input className="todo-input" autoComplete="off" placeholder="What needs to be done?" />
                </Form.Item>
            </Form>
        </div>
        
    );
}

TodoInput.propTypes = {
    onSubmitTodo: PropTypes.func,
    onCheckAll: PropTypes.func
}

TodoInput.defaultProps = {
    onSubmitTodo: null,
    onCheckAll: null
}

export default TodoInput;