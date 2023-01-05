// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { PolarArea } from "react-chartjs-2";
import { PolarAreaData } from "../Data/PolarAreaData";
import { options } from "../Data/Options";
import styles from "./Chart.module.scss";

function PolarAreaChart() {
  return (
    <div className={styles.container}>
      <PolarArea type={PolarAreaData.type} data={PolarAreaData} options={options} width="700px" height="700px" />
    </div>
  );
}

export default PolarAreaChart;
