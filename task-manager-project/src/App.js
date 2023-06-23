import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addTask = (task, date) => {
    const newTask = { title: task, completed: false, date: date };
    setTasks([...tasks, newTask]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const markTaskAsCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const filterTasks = (filter) => {
    setTasks(tasks.filter((task) => task.date === filter));
  };

  const sortTasks = (sort) => {
    setTasks(tasks.sort(sort));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="container">
        <div className="calendar-container">
          <h2>Calendar</h2>
          <Calendar value={selectedDate} onChange={handleDateChange} />
        </div>
        <div className="task-list-container">
          <h2>Task List</h2>
          <TaskList
            tasks={tasks}
            onAddTask={addTask}
            onDeleteTask={deleteTask}
            onMarkTaskAsCompleted={markTaskAsCompleted}
            onFilterTasks={filterTasks}
            onSortTasks={sortTasks}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default App;















