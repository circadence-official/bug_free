import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../context/TaskContext";
import IphoneBar from "../../components/IphoneBar/IphoneBar";
import Button from "../../components/Button/Button";
import InteractionCalendar from "../../components/InteractionCalendar/InteractionCalendar";
import Icon from "../../components/Icon/Icon";
import "./AddTask.css";

const AddTask = () => {
  const navigate = useNavigate();

  //allows to add task to global tasks
  const { addTask } = useTaskContext();

  //showcases current date
  const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [showCalendar, setShowCalendar] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  //updates the start and end date states and closes the calendar
  const handleDateSelection = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (showCalendar === "start") setStartDate(formattedDate);
    if (showCalendar === "end") setEndDate(formattedDate);
    setShowCalendar(null);
  };

  // adds task to global state and then to the dashboard
  const handleSubmit = () => {
    if (!title.trim()) {
      alert("Task title cannot be empty!");
      return;
    }

    addTask({
      id: Date.now(),
      title: title.trim(),
      description,
      startDate,
      endDate,
    });

    navigate("/");
  };

  return (
    <div className="add-task">
      <IphoneBar theme="blue" />

      <div className="add-task-header">
        <Button size="small" icon="arrowLeft" onClick={() => navigate("/")} />
        <h2>Add Task</h2>
      </div>

      <div className="add-task-content">
        <div className="date-selection">
          <div className="start-selection">
            <p>Start</p>
            <div
              className="date-field"
              onClick={() => setShowCalendar("start")}
            >
              <Icon type="calendar" size="medium" />
              <span>{startDate}</span>
            </div>
          </div>
          {showCalendar === "start" && (
            <div className="calendar-modal start-date">
              <InteractionCalendar onSelectDate={handleDateSelection} />
            </div>
          )}
          <div className="end-selection">
            <p>Ends</p>
            <div className="date-field" onClick={() => setShowCalendar("end")}>
              <Icon type="calendar" size="medium" />
              <span>{endDate}</span>
            </div>
          </div>
          {showCalendar === "end" && (
            <div className="calendar-modal end-date">
              <InteractionCalendar onSelectDate={handleDateSelection} />
            </div>
          )}
        </div>

        <p className="title-text">Title</p>
        <input
          type="text"
          className="task-input"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className="title-text">Category</p>
        <div className="category-section">Daily Task</div>

        <p className="title-text">Description</p>
        <textarea
          className="task-description"
          placeholder="Add a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button text="Create Task" size="large" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddTask;
