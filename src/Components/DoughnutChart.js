// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { DoughnutData } from "../Data/DoughnutData";
import styles from "./DoughnutChart.module.scss";

function DoughnutChart() {
  return (
    <div className={styles.chart}>
      <Doughnut type="doughnut" data={DoughnutData} className={styles.chart_Doughnut} />
    </div>
  );
}

export default DoughnutChart;
