import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTaskContext } from "../../context/TaskContext";
import IphoneBar from "../../components/IphoneBar/IphoneBar";
import Button from "../../components/Button/Button";
import InteractionCalendar from "../../components/InteractionCalendar/InteractionCalendar";
import Icon from "../../components/Icon/Icon";
import "./EditTask.css";

const EditTask = () => {
  const navigate = useNavigate();

  //gets the id from the URL 
  const { id } = useParams(); 

  // allows edit and delete from the global tasks
  const { tasks, editTask, deleteTask } = useTaskContext();

  //finds the task corresponding to the id and if doesn't exist then go back to dashboard
  const task = tasks.find((task) => task.id === Number(id));
  useEffect(() => {
    if (!task) navigate("/");
  }, [task, navigate]);

  const [startDate, setStartDate] = useState(task?.startDate || "");
  const [endDate, setEndDate] = useState(task?.endDate || "");
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [showCalendar, setShowCalendar] = useState(null);


  //updates the start and end date states and closes the calendar
  const handleDateSelection = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (showCalendar === "start") setStartDate(formattedDate);
    if (showCalendar === "end") setEndDate(formattedDate);
    setShowCalendar(null);
  };

  //clicking save will update the task and go back to the dashboard
  const handleSave = () => {
    if (!title.trim()) {
      alert("Task title cannot be empty!");
      return;
    }

    editTask({
      id: Number(id),
      title: title.trim(),
      description,
      startDate,
      endDate,
    });

    navigate("/");
  };

  const handleDelete = () => {
    deleteTask(Number(id));
    navigate("/");
  };


  return (
    <div className="edit-task">
      <IphoneBar theme="blue" />

      <div className="edit-task-header">
        <Button size="small" icon="arrowLeft" onClick={() => navigate("/")} />
        <h2>Edit Task</h2>
      </div>

      <div className="edit-task-content">
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className="title-text">Category</p>
        <div className="category-section">Daily Task</div>

        <p className="title-text">Description</p>
        <textarea
          className="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button text="Save" size="large" onClick={handleSave} />
        <Button text="Delete" size="large" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default EditTask;
