import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./DashBoard.css";
const DashBoard = () => {
  let params = useParams();

  return (
    <div className="full">
      <div className="topbar">Official Voters Registeration Portal</div>
      <div className="main_body">
        <div className="sidebar">
          <div className="side">
            <Link to="" className="side_button">
              DashBoard
            </Link>
          </div>
          <div className="side">
            <Link to="NewVoters" className="side_button">
              New Voter
            </Link>
          </div>
          {/* <div className="side">
            <Link className="side_button">Existing Voter</Link>
          </div> */}
          <div className="side">
            <Link to="AboutUs" className="side_button">
              About Us
            </Link>
          </div>
          <div className="side">
            <Link to="VotingPage" className="side_button">
              Voting
            </Link>
          </div>
          <div className="side_bottom">
            <Link to="/" className="side_button">
              Log Out
            </Link>
          </div>
        </div>

        <div className="Dashboard_1">
          {/* <Routes>
            <Route path="/NewVoters" element={<Newvoter />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Page2" element={<Fingerprint />} />
          </Routes> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
