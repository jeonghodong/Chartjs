// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";
import { MixedData } from "../Data/MixedData";
import styles from "./MixedChart.module.scss";

function MixedChart() {
  return (
    <div className={styles.chart}>
      <Line type="line" data={MixedData} className={styles.chart_line} />
    </div>
  );
}

export default MixedChart;
