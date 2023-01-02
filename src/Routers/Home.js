import React, { useEffect, useState } from "react";
import MixedChart from "../Components/MixedChart";
import PolarAreaChart from "../Components/PolarAreaChart";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <MixedChart />
          <PolarAreaChart />
        </div>
      )}
    </div>
  );
}

export default Home;
