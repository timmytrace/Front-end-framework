import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({});

  const handleToggleEdit = () => {
    setEditMode(!editMode);
    setEditedTask({ ...task }); // Initialize the editedTask with the current task details
  };

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    // Call a function to update the task details in the task list
    // Pass the editedTask object to update the corresponding task

    // Reset the edit mode and clear the edited task details
    setEditMode(false);
    setEditedTask({});
  };

  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      {!editMode ? (
        <div>
          <span onClick={() => onToggle(task.id)}>{task.title}</span>
          <button onClick={handleToggleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={editedTask.title || ''}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveChanges}>Save</button>
        </div>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;


  