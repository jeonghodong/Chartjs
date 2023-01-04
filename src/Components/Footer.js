import { text, social } from "../Data/FooterData";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2>
          <Link to="/">{text.logoName}</Link>
        </h2>
        <ul>
          {social.map((social) => (
            <li key={social.id}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        <span>{text.bottomName}</span>
      </footer>
    </div>
  );
}

export default Footer;
