// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { DoughnutData } from "../Data/DoughnutData";
import styles from "./Chart2.module.scss";

function DoughnutChart() {
  return (
    <div className={styles.container}>
      <Doughnut type="doughnut" data={DoughnutData} className={styles.container_chart} />
    </div>
  );
}

export default DoughnutChart;
