import { useEffect, useState } from "react";
import { getDoctors, addAppointment, getAppointments } from "../api";

function AppointmentPage() {

  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [form, setForm] = useState({
    patientName: "",
    doctorId: "",
    date: ""
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getDoctors().then(res => setDoctors(res.data));
    getAppointments().then(res => setAppointments(res.data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveAppointment = () => {
    addAppointment(form).then(() => {
      setForm({ patientName: "", doctorId: "", date: "" });
      loadData();
    });
  };

  return (
    <div className="container">

      <h2>Appointment Management</h2>

      <div className="table-card">
        <h3>Add Appointment</h3>

        <div className="form-grid">

          <input
            type="text"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            placeholder="Enter Patient Name"
          />

          <select
            name="doctorId"
            value={form.doctorId}
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>
            {doctors.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

        </div>

        <br />
        <button className="btn" onClick={saveAppointment}>
          + Add Appointment
        </button>
      </div>

      <div className="table-card">
        <h3>Appointments</h3>

        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length > 0 ? (
              appointments.map(a => (
                <tr key={a.id}>
                  <td>{a.patient?.name}</td>
                  <td>{a.doctor?.name}</td>
                  <td>{a.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No Appointments Available</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default AppointmentPage;