import React from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../context/TaskContext";
import IphoneBar from "../../components/IphoneBar/IphoneBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Button from "../../components/Button/Button";
import DailyTaskCard from "../../components/DailyTaskCard/DailyTaskCard";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  //using useTaskContext allows me to access the global state (tasks) without prop spamming
  const { tasks, toggleTaskCompletion } = useTaskContext();

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="dashboard">
      <IphoneBar theme="blue" />
      <div className="dashboard-content">
        <p className="date-text">{getCurrentDate()}</p>
        <div className="title-wrapper">
          <h2 className="welcome-text">Welcome!</h2>
          <Button
            text="Add Task"
            size="medium"
            icon="plus"
            onClick={() => navigate("/add-task")}
          />
        </div>
        <h3 className="task-header">Daily Tasks</h3>

        <div className="task-list">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => navigate(`/edit-task/${task.id}`)}
              >
                <DailyTaskCard
                  task={task}
                  onCheck={(e) => {
                    e.stopPropagation(); // Prevent navigation when clicking checkbox
                    toggleTaskCompletion(task.id);
                  }}
                />
              </div>
            ))
          ) : (
            <p className="no-task-text">No tasks for today! 😊</p>
          )}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Dashboard;
