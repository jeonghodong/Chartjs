// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { LineData } from "../Data/LineData";
import styles from "./Chart.module.scss";

function LineChart() {
  return (
    <div className={styles.container}>
      <Line type="line" data={LineData} className={styles.container_chart} />
    </div>
  );
}

export default LineChart;
