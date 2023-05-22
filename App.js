import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs/About_Us";
import "./App.css";
import DashBoard from "./DashBoard/DashBoard";
import Newvoter from "./NewVoter/NewVoter";
import SuccessReg from "./NewVoter/SuccessRegistration";
import Fingerprint from "./NewVoter/fingerprint";
import Success from "./VotingPage/Success";
import Voting from "./VotingPage/Voting";
import Login from "./main/Signinpage";
import Home from "./main_body/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/DashBoard" element={<DashBoard />}>
          <Route path="" element={<Home />} />
          <Route path="NewVoters" element={<Newvoter />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Page2" element={<Fingerprint />} />
          <Route path="VotingPage" element={<Voting />} />
          <Route path="Success" element={<Success />} />
          <Route path="SuccessfulReg" element={<SuccessReg />} />
        </Route>
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
