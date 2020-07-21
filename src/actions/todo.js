export const addNewTask = (todo) => {
    return {
        type: 'ADD_NEW_TASK',
        payload: todo
    }
}

export const updateTask = (taskId, todo) => {
    return {
        type: 'UPDATE_TASK',
        payload: {taskId, todo}
    }
}

export const checkAllTask = (isCheck) => {
    return {
        type: 'CHECK_ALL_TASK',
        payload: isCheck
    }
}

export const completeTask = (taskId) => {
    return {
        type: 'COMPLETED_TASK',
        payload: taskId
    }
}

export const deleteTask = (taskId) => {
    return {
        type: 'REMOVE_TASK',
        payload: taskId
    }
}

export const clearTask = () => {
    
}

