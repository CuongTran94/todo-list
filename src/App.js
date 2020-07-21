import React, {useState} from 'react';
import { Typography } from 'antd';
import './App.scss';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoAction from './components/TodoAction';
import { addNewTask, updateTask, deleteTask, checkAllTask, completeTask } from './actions/todo';
import { useSelector, useDispatch } from 'react-redux';

const { Title } = Typography;

function App() {
  const todoList = useSelector(state => state.todo.listTask);
  const isCheckAll = useSelector(state => state.todo.isCompleteAll);
  const [status, setStatus] = useState('All');
  const dispatch = useDispatch();

  const filterTodoByStatus = (todoList = [], status) => {
    switch(status) {
      case 'active' : {
        return todoList.filter(item => !item.isComplete);
      }

      case 'completed': {
        return todoList.filter(item => item.isComplete);
      }
      
      default:
        return todoList;
    }
  }

  const handleChangeStatus = (status) => {
    setStatus(status);
  }

  const handleAddNewTask = (todo) => {
    const action = addNewTask(todo);
    dispatch(action);
  }

  const handleUpdateTask = (taskId, todo) => {
    const action = updateTask(taskId, todo);
    dispatch(action);
  }

  const handleDeleteTask = (taskId) => {
    const action = deleteTask(taskId);
    dispatch(action);
  }

  const handleCheckAll = () => {
    const action = checkAllTask(!isCheckAll);
    dispatch(action);
  }

  const handleMarkCompleted = (taskId) => {
    const action = completeTask(taskId);
    dispatch(action);
  }
  
  return (    
    <div className="todo-app">
      <Title className="todo-title">todos</Title>
      <TodoInput 
        onSubmitTodo={handleAddNewTask}
        onCheckAll={handleCheckAll}
        isCheckAll={isCheckAll} 
      />
      <TodoList 
        todoList={filterTodoByStatus(todoList, status)} 
        onMarkCompleted={handleMarkCompleted}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
      <TodoAction 
        onChangeStatus={handleChangeStatus}
        totalTodo={todoList.filter(item => !item.isComplete).length} 
      />
    </div>
  );
}

export default App;
