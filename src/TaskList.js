// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onToggleTaskCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li
          key={task.id}
          className={task.completed ? 'completed' : ''}
          draggable="true"
          onDragStart={(e) => e.dataTransfer.setData('text/plain', task.id)}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTaskCompletion(task.id)}
          />
          <span>{task.name}</span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
