import styles from "./Chart.module.scss";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { data } from "../Data/Data";

function Chart() {
  return (
    <div className={styles.chart}>
      <div className={styles.chart_data}>
        <Line type="Line" data={data} />
      </div>
    </div>
  );
}

export default Chart;
