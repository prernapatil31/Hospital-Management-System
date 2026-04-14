import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import AppointmentPage from "./pages/AppointmentPage";
import AddPatientPage from "./pages/AddPatientPage";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>

      <Topbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/add-patient" element={<AddPatientPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;