import React from "react";
import { useNavigate } from "react-router-dom";
import dimage from "../images/dicon1.png";
import "../styles/List.css";
const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card"
        style={{
          cursor: "pointer",
          boxShadow: "0 0 20px #ddd",
          width: "100%",
        }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header bg-primary p-3">
          <img
            className="cardi"
            src={dimage}
            alt="color"
            style={{ width: "80px" }}
          />

          <br />
          <h5 style={{ color: "#fff" }}>
            Dr. {doctor.firstName} {doctor.lastName}
          </h5>
        </div>
        <div className="card-body">
          <p>
            <b>Specialization:</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience:</b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Cunsaltation:</b> {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
