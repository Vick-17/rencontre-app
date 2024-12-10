import "./App.css";
import Accueil from "./Page/Accueil";
import Stop from "./Page/Stop";
import InfoCoxChild from "./Page/InfoCoxChild";
import { Routes, Route } from "react-router-dom";
import SearchForm from "./Page/SearchForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/stop" element={<Stop />} />
      <Route path="/InfoCox" element={<InfoCoxChild />} />
      <Route path="/formSearch" element={<SearchForm />} />
    </Routes>
  );
}

export default App;
