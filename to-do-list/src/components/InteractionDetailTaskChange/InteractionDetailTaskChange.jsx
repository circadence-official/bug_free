import React from "react";
import "./InteractionDetailTaskChange.css";
import Button from "../Button/Button";

const InteractionDetailTaskChange = ({
  onSave,
  onDelete,
  onCancel,
  showConfirmation,
  showSuccess,
}) => {
  let content = null;

  if (showSuccess) {
    content = (
      <div className="success-message">
        <p className="box-message">Task deleted successfully</p>
        <Button text="Back" size="large" onClick={onCancel} />
      </div>
    );
  } else if (showConfirmation) {
    content = (
      <div className="confirmation">
        <p className="box-message">Do you want to delete this task?</p>
        <div className="confirmation-buttons">
          <Button text="Delete" size="large" onClick={onDelete} />
          <Button text="Cancel" size="large" onClick={onCancel} />
        </div>
      </div>
    );
  } else {
    content = (
      <div className="task-actions">
        <Button text="Save" size="large" onClick={onSave} />
        <Button text="Delete" size="large" onClick={onDelete} />
      </div>
    );
  }

  return <div className="interaction-detail-task-change">{content}</div>;
};

export default InteractionDetailTaskChange;
