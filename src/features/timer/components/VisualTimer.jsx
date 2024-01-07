import styles from "./VisualTimer.module.css";

export default function VisualTimer({ progress }) {
  const style = {
    "--progress": progress * 100,
  };
  return <div className={styles["pie"]} style={style}></div>;
}
