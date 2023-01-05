// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { DoughnutData } from "../Data/DoughnutData";
import { options } from "../Data/Options";
import styles from "./Chart.module.scss";

function DoughnutChart() {
  return (
    <div className={styles.container}>
      <Doughnut type="doughnut" options={options} data={DoughnutData} width="700px" height="700px" />
    </div>
  );
}

export default DoughnutChart;
