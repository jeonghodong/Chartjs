// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { MixedData } from "../Data/MixedData";
import styles from "./Chart.module.scss";

function MixedChart() {
  return (
    <div className={styles.container}>
      <Line type="line" data={MixedData} className={styles.container_chart} />
    </div>
  );
}

export default MixedChart;
