// React Router
import { Link } from "react-router-dom";

// Ours
import styles from "./Footer.module.css";
import { TimeDisplay } from "@/features/timer";

export const Footer = ({
  clockProgress: { segmentTranspired, segmentLength },
}) => (
  <div className={styles["footer"]}>
    <div className={styles["footer__timer-info"]}>
      <TimeDisplay timeMs={segmentTranspired} showMs={false} />
      <span>/</span>
      <TimeDisplay timeMs={segmentLength} showMs={false} />
    </div>
    <Link to="/">Back</Link>
  </div>
);
