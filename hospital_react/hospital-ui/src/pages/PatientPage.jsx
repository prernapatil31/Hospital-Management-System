import { useEffect, useState } from "react";
import { getPatients } from "../api";
import { useNavigate } from "react-router-dom";

function PatientPage() {

  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getPatients().then(res => setPatients(res.data));
  };

  return (
    <div className="container">

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Patient Management</h2>

        <button className="btn" onClick={() => navigate("/add-patient")}>
          + Add Patient
        </button>
      </div>

      <div className="table-card">
        <h3>Patient List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Disease</th>
              <th>Doctor</th>
              <th>Blood</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {patients.length > 0 ? (
              patients.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.disease}</td>
                  <td>{p.doctorName}</td>
                  <td>{p.bloodGroup}</td>
                  <td>{p.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Patients Available</td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default PatientPage;