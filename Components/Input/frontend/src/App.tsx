import {Routes, Route} from "react-router-dom"
import Chip from "./pages/Chip"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Chip />} />
    </Routes>
  )
}

export default App