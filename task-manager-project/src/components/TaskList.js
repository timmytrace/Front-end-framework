import React from 'react';

const TaskList = ({ tasks, onAddTask, onDeleteTask, onMarkTaskAsCompleted, onFilterTasks, onSortTasks, selectedDate }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    onAddTask(task);
    e.target.task.value = '';
  };

  const handleDeleteTask = (index) => {
    onDeleteTask(index);
  };

  const handleMarkTaskAsCompleted = (index) => {
    onMarkTaskAsCompleted(index);
  };

  const handleFilterTasks = (filter) => {
    onFilterTasks(filter);
  };

  const handleSortTasks = () => {
    onSortTasks();
  };
  const filteredTasks = tasks.filter((task) => task.date === selectedDate);


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

export default TaskList;











