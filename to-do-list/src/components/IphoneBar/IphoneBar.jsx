import React, { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import "./IphoneBar.css";

const IphoneBar = ({ theme = "white" }) => {
  const [time, setTime] = useState(getFormattedTime());

  // updates the time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // formats the time to 12-hour format without AM/PM
  function getFormattedTime() {
    const now = new Date();
    let formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return formattedTime.replace(/AM|PM/gi, "").trim();
  }

  return (
    <div className={`iphone-bar ${theme}`}>
      <span className="time">{time}</span>
      <div className="status-icons">
        <Icon type="signal" size="medium" color={theme === "white" ? "black" : "white"} />
        <Icon type="wifi" size="medium" color={theme === "white" ? "black" : "white"} />
        <Icon type="battery" size="medium" color={theme === "white" ? "black" : "white"} />
      </div>
    </div>
  );
};

export default IphoneBar;
