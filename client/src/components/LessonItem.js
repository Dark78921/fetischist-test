import React from 'react';

function LessonItem({ lesson, isSelected, toggleSelect }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 250 }}>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <p>Duration: {lesson.duration} min</p>
      <button onClick={() => toggleSelect(lesson)}>
        {isSelected ? 'Remove' : 'Add'}
      </button>
    </div>
  );
}

export default LessonItem;