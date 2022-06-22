import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AdminTab from "./components/AdminTab";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isLoged, setIsLoged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    isLoged ? navigate("/main") : navigate("/");
  }, [isLoged]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage setLoginStatus={setIsLoged} />} />
        <Route path="main" element={<MainPage setLoginStatus={setIsLoged} />}>
          <Route path="admintab" element={<AdminTab />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
