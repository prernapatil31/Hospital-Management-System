import { useEffect, useState } from "react";
import { getPatients, getDoctors, getAppointments } from "../api";

function Dashboard() {

  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [appointments, setAppointments] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getPatients().then(res => setPatients(res.data.length));
    getDoctors().then(res => setDoctors(res.data.length));
    getAppointments().then(res => setAppointments(res.data.length));
  };

  return (
    <div className="container">

      <h2>Dashboard</h2>

      <div className="cards">

        <div className="card blue">
          <h3>Patients</h3>
          <p>{patients}</p>
        </div>

        <div className="card green">
          <h3>Doctors</h3>
          <p>{doctors}</p>
        </div>

        <div className="card orange">
          <h3>Appointments</h3>
          <p>{appointments}</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;