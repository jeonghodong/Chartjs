import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import styles from "./Default.module.scss";

function Default() {
  return (
    <div>
      <Header />
      <div className={styles.default}>
        <div className={styles.default_left}>
          <SideBar />
        </div>
        <div className={styles.default_right}>
          <Outlet />
          <Footer className={styles.default_right_footer} />
        </div>
      </div>
    </div>
  );
}

export default Default;
