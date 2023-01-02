import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chart from "./Components/Chart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default App;
