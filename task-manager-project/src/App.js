// src/App.js

import React from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './App.css';
import { changeDate } from '../src/actions/taskActions';


const App = ({ selectedDate, changeDate }) => {
  const handleDateChange = date => {
    changeDate(date);
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
          <TaskList />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedDate: state.selectedDate,
});

const mapDispatchToProps = {
  changeDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
