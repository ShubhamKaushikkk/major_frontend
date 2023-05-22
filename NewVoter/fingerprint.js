import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBetween } from "use-between";
import { UseShareableState } from "./NewVoter";
import "./fingerprint.css";

const Fingerprint = () => {
  const [Loading, setLoading] = useState(false);
  const { num } = useBetween(UseShareableState);
  const fid = num % 100;
  let nav = useNavigate();
  const handleLoading = async (e) => {
    setLoading(!Loading);
    // const generateId = {
    //   fId: fid,
    //   adharNumber: num,
    // };
    await axios
      .get(`https://major-backend-ealt.onrender.com/api/v0/isRegistered`)
      .then((res) => {
        console.log(res.data.isRegistered);
        // if(res.isRegistered== 1){
        // return nav("/DashBoard/SuccessfulReg");
        // }
        // else{
        //   alert("failed");
        // }
      });
    // });
  };

  return (
    <div className="Body">
      <div className="heading"> Scan Fingerprint</div>
      <hr className="h_line" />
      <input
        className="scan"
        size="50"
        type="button"
        onClick={handleLoading}
        value="Scan My Fingerprint"
      />

      {Loading === true ? <div className="loader"></div> : <div />}
    </div>
  );
};

export default Fingerprint;
