import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Voting.css";
const Voting = () => {
  let nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://major-backend-ealt.onrender.com/api/v0/getVoted`)
        .then((res) => {
          console.log(res);
          if (res.data.fid != "") {
            return nav("/DashBoard/Success");
          } else {
            alert("failed");
          }
        });
      await axios
        .post("https://major-backend-ealt.onrender.com/api/v0/negVoted")
        .then((res) => {
          console.log("working");
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  });

  return (
    <div className="Body">
      <div className="heading"> Welcome Voters </div>
      <hr className="h_line" />
      <h2 className="head_style">Press Button Number For Party</h2>
      <h1></h1>
      <div className="party">
        <h3>1. Bharatiya Janata Party</h3>
        <h3>2. Indian National Congress</h3>
        <h3>3. Aam Aadmi Party</h3>
      </div>
      {/* <input
        className="scan"
        size="50"
        type="button"
        onClick={handleButton1}
        value="Scan My Fingerprint"
      /> */}
    </div>
  );
};

export default Voting;
