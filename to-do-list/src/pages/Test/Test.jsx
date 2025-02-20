import React from "react";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import IphoneBar from "../../components/IphoneBar/IphoneBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import DailyTaskCard from "../../components/DailyTaskCard/DailyTaskCard";
import InteractionDetailTaskChange from "../../components/InteractionDetailTaskChange/InteractionDetailTaskChange";
import InteractionNewTaskCreated from "../../components/InteractionNewTaskCreated/InteractionNewTaskCreated";
import InteractionNewTaskUpdated from "../../components/InteractionNewTaskUpdated/InteractionNewTaskUpdated";
import InteractionAddTaskDetail from "../../components/InteractionAddTaskDetail/InteractionAddTaskDetail";
import InteractionEditTaskDetail from "../../components/InteractionEditTaskDetail/InteractionEditTaskDetail";
import InteractionCalendar from "../../components/InteractionCalendar/InteractionCalendar";

const Test = () => {
  return (
    <div>
      <IphoneBar theme="white" />
      <Button
        text="Click me"
        size="large"
        icon="plus"
        onClick={() => console.log("Button Clicked")}
      />
      <Button
        text="Click me 2"
        size="medium"
        icon="minus"
        onClick={() => console.log("Button Clicked")}
      />
      <Button
        size="medium"
        icon="calendar"
        onClick={() => console.log("Button Clicked")}
      />
      <Icon type="home" size="large" color="blue" />
      <IphoneBar theme="blue" />
      <NavigationBar />
      <DailyTaskCard task="Finish coding this project" />
      <InteractionDetailTaskChange
        onSave={() => console.log("Save Clicked")}
        onDelete={() => console.log("Delete Clicked")}
        onCancel={() => console.log("Cancel Clicked")}
        showConfirmation={true}
        showSuccess={false}
      />
      <InteractionNewTaskCreated onBack={() => console.log("Back Clicked")} />
      <InteractionNewTaskUpdated onBack={() => console.log("Back Clicked")} />
      <InteractionAddTaskDetail
        onAddTask={(taskDetail) => console.log("Task Added:", taskDetail)}
        onCancel={() => console.log("Cancel Clicked")}
      />
      <InteractionEditTaskDetail
        initialTask="Finish coding this project"
        onSave={(taskDetail) => console.log("Task Saved:", taskDetail)}
        onDelete={() => console.log("Task Deleted")}
      />
      <InteractionCalendar />
    </div>
  );
};

export default Test;
