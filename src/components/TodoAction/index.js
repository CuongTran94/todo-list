import React from 'react';
import { List} from 'antd';
import PropTypes from 'prop-types';
import './style.scss';

const filters = ['all', 'active', 'completed'];

const TodoAction = (props) => {
    const { onChangeStatus, totalTodo } = props;

    const handleChangeStatus = (status) => {
        if(onChangeStatus) {
            onChangeStatus(status);
        }        
    }

    return (
        <div className="todo-action">
            <span className="todo-count">{totalTodo} item left</span>
            <List 
                className="todo-filter"
                itemLayout="vertical"
                dataSource={filters}
                renderItem={item => (
                    <List.Item className="inline-item">
                        <a href={'#/' + item} onClick={() => handleChangeStatus(item)}>{item}</a>
                    </List.Item>
                )}
            />
        </div>
    );
}

PropTypes.propTypes = {
    onChangeStatus: PropTypes.func,
    totalTodo: PropTypes.number
}

PropTypes.defaultProps = {
    onChangeStatus: null,
    totalTodo: 0
}

export default TodoAction;