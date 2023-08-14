// src/store.js

import { createStore } from 'redux';
import tasksReducer from './reducers/taskReducer';

const store = createStore(tasksReducer);

export default store;
