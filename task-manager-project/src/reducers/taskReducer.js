// src/redux/reducers/taskReducer.js

import {
    ADD_TASK,
    REMOVE_TASK,
    MARK_TASK_COMPLETED,
    FILTER_TASKS,
    SORT_TASKS,
    CHANGE_DATE,
  } from '../actions/taskActions';
  
  const initialState = {
    tasks: [],
    filter: 'all',
    selectedDate: new Date(),
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return { ...state, tasks: [...state.tasks, action.payload] };
      case REMOVE_TASK:
        return { ...state, tasks: state.tasks.filter((_, index) => index !== action.payload) };
      case MARK_TASK_COMPLETED:
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      case FILTER_TASKS:
        return { ...state, filter: action.payload };
      case SORT_TASKS:
        return {
          ...state,
          tasks: [...state.tasks].sort((a, b) => new Date(a.date) - new Date(b.date)),
        };
      case CHANGE_DATE:
        return {
          ...state,
          selectedDate: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  
