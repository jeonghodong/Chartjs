import styles from "./SideBar.module.scss";
import { SideBarData } from "../Data/SideBarData";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        {SideBarData.map((SideBarData) => (
          <li key={SideBarData.listName}>
            <Link to={SideBarData.to}>{SideBarData.listName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
