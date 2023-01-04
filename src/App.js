import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Default from "./Routers/Default";
import Home from "./Routers/Home";
import BarChart from "./Components/BarChart";
import DoughnutChart from "./Components/DoughnutChart";
import LineChart from "./Components/LineChart";
import MixedChart from "./Components/MixedChart";
import PieChart from "./Components/PieChart";
import PolarAreaChart from "./Components/PolarAreaChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/Line" element={<LineChart />} />
          <Route path="/Bar" element={<BarChart />} />
          <Route path="/Mixed" element={<MixedChart />} />
          <Route path="/Pie" element={<PieChart />} />
          <Route path="/Doughnut" element={<DoughnutChart />} />
          <Route path="/PolarArea" element={<PolarAreaChart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
