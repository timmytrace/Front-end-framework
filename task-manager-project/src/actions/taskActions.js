// src/redux/actions/taskActions.js

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const MARK_TASK_COMPLETED = "MARK_TASK_COMPLETED";
export const FILTER_TASKS = "FILTER_TASKS";
export const SORT_TASKS = "SORT_TASKS";
export const CHANGE_DATE = "CHANGE_DATE";

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const markTaskCompleted = taskId => ({
  type: MARK_TASK_COMPLETED,
  payload: taskId,
});

export const filterTasks = filter => ({
  type: FILTER_TASKS,
  payload: filter,
});

export const sortTasks = () => ({
  type: SORT_TASKS,
});

export const changeDate = date => ({
  type: CHANGE_DATE,
  payload: date,
});

