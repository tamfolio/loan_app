import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsAndConditions from "./Components/TermsAndConditions.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/terms" element={<TermsAndConditions />} />
    </Routes>
  </Router>
);
