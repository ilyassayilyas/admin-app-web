import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AdminTab from "./components/AdminTab";
import ScreeningTab from "./components/ScreeningTab";
import StepikTab from "./components/StepikPoolTab";
import JobOfferTab from "./components/JobOfferTab";
import AutoIntTab from "./components/AutoIntTab";
import TechIntTab from "./components/TechIntTab";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "./components/APIservice";
import { useState, useEffect } from "react";

function App() {
  const [isLoged, setIsLoged] = useState(false);
  const [adminData, setAdminData] = useState(undefined);

  // const [isOnScreeningTab, setIsOnScreeningTab] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    isLoged ? navigate("/main/screeningtab") : navigate("/");
  }, [isLoged]);

  useEffect(() => {
    isLoged
      ? getAdminData().then((data) => {
          setAdminData(data);
        })
      : navigate("/");
  }, [isLoged]);

  // useEffect(() => {
  //   console.log(window.location.pathname);
  // }, [window.location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage setLoginStatus={setIsLoged} />} />
        <Route path="main" element={<MainPage setLoginStatus={setIsLoged} />}>
          <Route
            path="admintab"
            element={<AdminTab adminDataProps={adminData} />}
          />
          <Route path="screeningtab" element={<ScreeningTab />} />
          <Route path="stepik" element={<StepikTab />} />
          <Route path="autointerview" element={<AutoIntTab />} />
          <Route path="techinterview" element={<TechIntTab />} />
          <Route path="joboffer" element={<JobOfferTab />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
