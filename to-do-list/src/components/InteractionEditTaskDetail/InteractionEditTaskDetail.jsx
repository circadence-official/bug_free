import React, { useState } from "react";
import Button from "../Button/Button";
import "./InteractionEditTaskDetail.css";

const InteractionEditTaskDetail = ({ initialTask, onSave, onDelete }) => {
  const [taskDetail, setTaskDetail] = useState(initialTask);

  const handleSave = () => {
    if (taskDetail.trim()) {
      onSave(taskDetail);
    }
  };

  return (
    <div className="interaction-edit-task-detail">
      <input
        type="text"
        className="task-input"
        value={taskDetail}
        onChange={(e) => setTaskDetail(e.target.value)}
      />
      <div className="button-group">
        <Button text="Save" size="large" onClick={handleSave} />
        <Button text="Delete Task" size="large" onClick={onDelete} />
      </div>
    </div>
  );
};

export default InteractionEditTaskDetail;
