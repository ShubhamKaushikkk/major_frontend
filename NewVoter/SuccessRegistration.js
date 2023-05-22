import React from "react";
import { useNavigate } from "react-router-dom";
import "../VotingPage/Voting.css";
const SuccessReg = () => {
  let nav = useNavigate();
  const handleButton = () => {
    return nav("/DashBoard/NewVoters");
  };
  return (
    <div className="Body">
      <p className="success_btn">Successfully Registered!!</p>
      <input
        className="scan"
        size="500"
        type="button"
        onClick={handleButton}
        value="Back"
      />
    </div>
  );
};

export default SuccessReg;
