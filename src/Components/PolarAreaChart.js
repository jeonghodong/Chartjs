// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { PolarArea } from "react-chartjs-2";
import { PolarAreaData } from "../Data/PolarAreaData";
import styles from "./PolarAreaData.module.scss";

function PolarAreaChart() {
  return (
    <div className={styles.chart}>
      <PolarArea type="polarArea" data={PolarAreaData} className={styles.chart_Polar} />
    </div>
  );
}

export default PolarAreaChart;
