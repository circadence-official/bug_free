import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddTask from "./pages/AddTask/AddTask";
import EditTask from "./pages/EditTask/EditTask";
// import Test from "./pages/Test/Test";

const App = () => {
  return (
    // <Test />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/edit-task/:id" element={<EditTask />} />
    </Routes>
  );
};

export default App;
