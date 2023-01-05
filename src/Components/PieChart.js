// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { PieData } from "../Data/PieData";
import { options } from "../Data/Options";
import styles from "./Chart.module.scss";

function PieChart() {
  return (
    <div className={styles.container}>
      <Pie type="pie" data={PieData} options={options} width="700px" height="700px" />
    </div>
  );
}

export default PieChart;
