const initialState = {
    listTask: [],
    isCompleteAll: false,
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_TASK': {
            const newTask = [...state.listTask];
            newTask.push({
                id:     action.payload.id,
                title:  action.payload.title,
                isComplete: false
            });
            
            return {
                ...state,
                isCompleteAll: false,
                listTask: newTask
            }
        }

        case 'CHECK_ALL_TASK': {
            const listTask = [...state.listTask];

            const newTask = listTask.map(item => {
                return {...item, isComplete: action.payload }
            });

            return {
                isCompleteAll: action.payload,
                listTask: newTask
            }
        }

        case 'COMPLETED_TASK': {
            const listTask = [...state.listTask];
            let isCheckAll = true;
            
            const newTask = listTask.map(item => {
                if((!item.isComplete && item.id !== action.payload) || 
                    (item.isComplete && item.id === action.payload)) {
                        isCheckAll = false;
                    }
                
                if(item.id === action.payload) {                    
                    return {
                        ...item,
                        isComplete: !item.isComplete
                    }
                }

                return item;
            });

            return {
                listTask: newTask,
                isCompleteAll: isCheckAll
            };
        }

        case 'REMOVE_TASK': {
            const listTodo = [...state.listTask];
            let isComplete = true;
            const newTask = listTodo.filter(item => item.id !== action.payload);
            isComplete = newTask.every(item => {
                if(!item.isComplete) return false;
                return true;
            });

            
            return {
                ...state,
                isCompleteAll: isComplete,
                listTask: newTask
            }
        }

        case 'UPDATE_TASK': {
            const listTodo = [...state.listTask];

            const newList = listTodo.map(item => item.id === action.payload.taskId ? {...item, title: action.payload.todo} : item);

            return {
                ...state,
                listTask: newList
            };
        }

        default:
            return state;
    }
}

export default todoReducer;