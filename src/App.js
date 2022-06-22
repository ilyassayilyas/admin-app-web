import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isLoged, setIsLoged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    isLoged ? navigate("/main") : navigate("/");
  }, [isLoged, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage setLoginStatus={setIsLoged} />} />
        <Route
          path="/main"
          element={<MainPage setLoginStatus={setIsLoged} />}
        />
      </Routes>
    </div>
  );
}

export default App;
