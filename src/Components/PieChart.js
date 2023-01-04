// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { PieData } from "../Data/PieData";
import styles from "./Chart2.module.scss";

function PieChart() {
  return (
    <div className={styles.container}>
      <Pie type="pie" data={PieData} className={styles.container_chart} />
    </div>
  );
}

export default PieChart;
