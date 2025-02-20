import React, { useState } from "react";
import Button from "../Button/Button";
import "./InteractionAddTaskDetail.css";

const InteractionAddTaskDetail = ({ onAddTask, onCancel }) => {
  const [taskDetail, setTaskDetail] = useState("");

  const handleAdd = () => {
    if (taskDetail.trim()) {
      onAddTask(taskDetail);
      setTaskDetail(""); // Clear input after adding task
    }
  };

  return (
    <div className="interaction-add-task-detail">
      <input
        type="text"
        className="task-input"
        placeholder="Type something..."
        value={taskDetail}
        onChange={(e) => setTaskDetail(e.target.value)}
      />
      <div className="button-group">
        <Button text="Add Task" size="large" onClick={handleAdd} />
        <Button text="Cancel" size="large" onClick={onCancel} />
      </div>
    </div>
  );
};

export default InteractionAddTaskDetail;
