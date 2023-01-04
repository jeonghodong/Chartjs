// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { BarData } from "../Data/BarData";
import styles from "./Chart.module.scss";

function BarChart() {
  return (
    <div className={styles.container}>
      <Line type="line" data={BarData} className={styles.container_chart} />
    </div>
  );
}

export default BarChart;
