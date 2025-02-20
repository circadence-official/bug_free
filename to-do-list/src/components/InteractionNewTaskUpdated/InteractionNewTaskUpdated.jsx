import React from "react";
import "./InteractionNewTaskUpdated.css";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const InteractionNewTaskUpdated = ({ onBack }) => {
  return (
    <div className="interaction-new-task-updated">
      <div className="check-icon">
        <Icon type="check" size="large" color="white" />
      </div>
      <p className="success-message">Task updated successfully</p>
      <div className="back-button">
        <Button text="Back" size="large" onClick={onBack} />
      </div>
    </div>
  );
};

export default InteractionNewTaskUpdated;
