import React, { useState } from 'react';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  const [completed, setCompleted] = useState(todo.completed);

  const toggleComplete = () => {
    setCompleted(!completed);
    onToggleComplete();
  };

  return (
    <li className={completed ? 'completed' : ''}>
      {todo.text}
      <div>
        <button onClick={toggleComplete}>
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={onDelete} className="delete">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
