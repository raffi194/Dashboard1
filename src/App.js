import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";  // Path sudah benar karena berada di src/

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
