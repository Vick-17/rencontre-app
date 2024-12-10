import "./App.css";
import Accueil from "./Page/Accueil";
import Stop from "./Page/Stop";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/stop" element={<Stop />} />
    </Routes>
  );
}

export default App;
