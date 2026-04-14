import { useState } from "react";
import { addPatient } from "../api";
import { useNavigate } from "react-router-dom";

function AddPatientPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
    doctorName: "",
    bloodGroup: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePatient = () => {
    addPatient(form).then(() => {
      navigate("/patients");
    });
  };

  return (
    <div className="container">

      <h2>Add Patient</h2>

      <div className="table-card">
        <div className="form-grid">

          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="age" placeholder="Age" onChange={handleChange} />
          <input name="disease" placeholder="Disease" onChange={handleChange} />
          <input name="doctorName" placeholder="Doctor Name" onChange={handleChange} />
          <input name="bloodGroup" placeholder="Blood Group" onChange={handleChange} />
          <input name="phone" placeholder="Contact No" onChange={handleChange} />

        </div>

        <br />
        <button className="btn" onClick={savePatient}>
          + Add Patient
        </button>

      </div>

    </div>
  );
}

export default AddPatientPage;