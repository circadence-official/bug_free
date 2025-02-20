import React from "react";
import "./DailyTaskCard.css";

const DailyTaskCard = ({ task, onCheck }) => {
  return (
    <div className="daily-task-card">
      <span className="task-title">{task.title}</span>
      <input
        type="checkbox"
        checked={task.completed}
        // Stop navigation event so it doesn't go into editTask when clicking checkbox
        onClick={(e) => e.stopPropagation()} 
        onChange={(e) => {
          e.stopPropagation(); 
          onCheck(e);
        }}
      />
    </div>
  );
};

export default DailyTaskCard;



