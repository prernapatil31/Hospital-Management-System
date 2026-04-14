import { useEffect, useState } from "react";
import { getDoctors, addDoctor } from "../api";

function DoctorPage() {

  const [doctors, setDoctors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    specialization: ""
  });

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = () => {
    getDoctors().then(res => {
      console.log(res.data); // 👈 check in console
      setDoctors(res.data);
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveDoctor = () => {
    addDoctor(form).then(() => {
      setForm({ name: "", specialization: "" });
      loadDoctors(); // 🔥 refresh list
    });
  };

  return (
    <div className="container">

      <h2>Doctor Management</h2>

      {/* ADD FORM */}
      <div className="table-card">
        <h3>Add Doctor</h3>

        <input
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="specialization"
          value={form.specialization}
          placeholder="Specialization"
          onChange={handleChange}
        />

        <br /><br />
        <button className="btn" onClick={saveDoctor}>
          + Add Doctor
        </button>
      </div>

      {/* LIST */}
      <div className="table-card">
        <h3>Doctor List</h3>

        {doctors.length > 0 ? (
          doctors.map(d => (
            <p key={d.id}>
              {d.name} - {d.specialization}
            </p>
          ))
        ) : (
          <p>No Doctors Available</p>
        )}

      </div>

    </div>
  );
}

export default DoctorPage;