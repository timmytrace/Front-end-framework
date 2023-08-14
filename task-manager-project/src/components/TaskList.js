import React from 'react';
import { connect } from 'react-redux';

import {
  addTask,
  removeTask,
  markTaskCompleted,
  filterTasks,
  sortTasks,
} from '../actions/taskActions';

const TaskList = ({
  tasks,
  addTask,
  removeTask,
  markTaskCompleted,
  filterTasks,
  sortTasks,
  selectedDate,
}) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    const taskObject = { title: task, completed: false, date: selectedDate };
    addTask(taskObject);
    e.target.task.value = '';
  };

  const handleDeleteTask = (index) => {
    removeTask(index);
  };
  const filteredTasks = tasks.filter((task) => task.date === selectedDate);


  const handleMarkTaskAsCompleted = (index) => {
    markTaskCompleted(index);
  };

  const handleFilterTasks = (filter) => {
    filterTasks(filter);
  };

  const handleSortTasks = () => {
    sortTasks();
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleMarkTaskAsCompleted(index)}
            />
            {task.title}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        {filteredTasks.length > 0 ? (
          <ul>
            {filteredTasks.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleMarkTaskAsCompleted(index)}
                />
                {task.title}
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks for the selected date</p>
        )}
      </div>
      <div>
        <button onClick={() => handleFilterTasks('today')}>Filter Today</button>
        <button onClick={() => handleFilterTasks('completed')}>Filter Completed</button>
        <button onClick={() => handleSortTasks()}>Sort by Date</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.filter((task) => {
    if (state.filter === 'today') {
      return task.date === new Date().toISOString().slice(0, 10);
    } else if (state.filter === 'completed') {
      return task.completed;
    } else {
      return true;
    }
  }),
  selectedDate: state.selectedDate,
});

const mapDispatchToProps = {
  addTask,
  removeTask,
  markTaskCompleted,
  filterTasks,
  sortTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
