import { Route, Routes, Navigate} from "react-router-dom"
import {Input} from "./components/Input.tsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Input />}/>
        <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </>
  );
}

export default App;
