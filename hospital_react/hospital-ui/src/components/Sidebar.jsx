import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🏥 HMS</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/appointments">Appointments</Link>
    </div>
  );
}

export default Sidebar;