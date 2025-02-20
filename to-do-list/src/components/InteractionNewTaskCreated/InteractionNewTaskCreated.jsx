import React from "react";
import "./InteractionNewTaskCreated.css";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const InteractionNewTaskCreated = ({ onBack }) => {
  return (
    <div className="interaction-new-task-created">
      <div className="check-icon">
        <Icon type="check" size="large" color="white" />
      </div>
      <p className="success-message">Task has been created successfully</p>
      <div className="back-button">
        <Button text="Back" size="large" onClick={onBack} />
      </div>
    </div>
  );
};

export default InteractionNewTaskCreated;
