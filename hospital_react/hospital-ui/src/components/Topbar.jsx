import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">

      <div className="logo">🏥 HMS</div>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointments">Appointments</Link>
      </div>

      <div className="admin">Admin ▼</div>

    </div>
  );
}

export default Topbar;