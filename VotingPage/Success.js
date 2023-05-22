import React from "react";
import { useNavigate } from "react-router-dom";
import "./Voting.css";
const Success = () => {
  let nav = useNavigate();
  const handleButton = () => {
    return nav("/DashBoard/VotingPage");
  };
  return (
    <div className="Body">
      <p className="success_btn">Successfully Voted!!</p>
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

export default Success;
