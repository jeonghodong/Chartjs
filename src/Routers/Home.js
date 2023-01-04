import React, { useEffect, useState } from "react";

import styles from "./Home.module.scss";

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
        <div className={styles.home}>
          <h1>home</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
