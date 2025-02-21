import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsAndConditions from "./Components/TermsAndConditions.jsx";
import TermsOfUse from "./Components/TermsOfUse.jsx";
import LeadScoutForm from "./Components/LeadScoutForm.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
      <Route path="/terms_of_use" element={<TermsOfUse />} />
      <Route path="/get-started" element={<LeadScoutForm />} />
    </Routes>
  </Router>
);
