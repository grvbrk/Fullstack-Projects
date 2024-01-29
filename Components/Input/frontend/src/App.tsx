import { Routes, Route } from "react-router-dom";
import Chip from "./pages/Chip";
import Login from "./pages/Login";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Auth />}>
        <Route path="/" element={<Chip />} />
      </Route>
    </Routes>
  );
}

export default App;
