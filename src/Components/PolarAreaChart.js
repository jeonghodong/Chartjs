// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { PolarArea } from "react-chartjs-2";
import { PolarAreaData } from "../Data/PolarAreaData";
import styles from "./Chart2.module.scss";

function PolarAreaChart() {
  return (
    <div className={styles.container}>
      <PolarArea type="polarArea" data={PolarAreaData} className={styles.container_chart} />
    </div>
  );
}

export default PolarAreaChart;
