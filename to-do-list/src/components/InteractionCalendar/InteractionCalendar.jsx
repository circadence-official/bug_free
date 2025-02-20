import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./InteractionCalendar.css";

const InteractionCalendar = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const days = [];

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar-day faded">
          {daysInPrevMonth - i}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === i;

      days.push(
        <div
          key={i}
          className={`calendar-day ${isToday ? "today" : ""}`}
          onClick={() => onSelectDate(new Date(year, month, i))}
        >
          {i}
        </div>
      );
    }

    const totalCells = firstDayOfMonth + daysInMonth;
    const remainingCells = 42 - totalCells;

    for (let i = 1; i <= remainingCells; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar-day faded">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="interaction-calendar">
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePrevMonth}>
          <ChevronLeft size={20} />
        </button>
        <span className="month-year">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button className="nav-button" onClick={handleNextMonth}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="calendar-grid">
        <div className="day-label">Su</div>
        <div className="day-label">Mo</div>
        <div className="day-label">Tu</div>
        <div className="day-label">We</div>
        <div className="day-label">Th</div>
        <div className="day-label">Fr</div>
        <div className="day-label">Sa</div>
        {generateCalendarDays()}
      </div>
    </div>
  );
};

export default InteractionCalendar;
