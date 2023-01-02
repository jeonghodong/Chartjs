import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Default from "./Routers/Default";
import Home from "./Routers/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
