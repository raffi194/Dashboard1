import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tiket from "./Tiket";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tiket />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> {/* Gunakan * agar mendukung sub-routes */}
        <Route path="*" element={<NotFound />} /> {/* Untuk rute yang tidak dikenali */}
      </Routes>
    </Router>
  );
};

export default App;
