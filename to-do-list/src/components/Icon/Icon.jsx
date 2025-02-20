import React from "react";
import {
  Home,
  Plus,
  Minus,
  ArrowLeft,
  Calendar,
  Wifi,
  BatteryFull,
  Signal,
  Check,
} from "lucide-react";
import "./Icon.css";

const Icon = ({ type, size = "medium", color = "#006ee9" }) => {
  const iconTypes = {
    home: <Home className="icon-svg" />,
    plus: <Plus className="icon-svg" />,
    minus: <Minus className="icon-svg" />,
    arrowLeft: <ArrowLeft className="icon-svg" />,
    calendar: <Calendar className="icon-svg" />,
    wifi: <Wifi className="icon-svg" />,
    battery: <BatteryFull className="icon-svg" />,
    signal: <Signal className="icon-svg" />,
    check: <Check className="icon-svg" />,
  };
  return (
    <span className={`icon ${size}`} style={{ color }}>
      {iconTypes[type]}
    </span>
  );
};

export default Icon;
