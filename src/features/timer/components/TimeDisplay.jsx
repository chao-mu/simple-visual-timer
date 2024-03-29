// Ours - Utils
import { padTime, splitTimeMs } from "../utils/time.js";

// Ours - Style
import styles from "./TimeDisplay.module.css";

export default function TimeDisplay({ timeMs, showMs }) {
  const { hours, minutes, seconds, ms } = splitTimeMs(timeMs);

  let components = [];
  if (hours > 0) {
    components.push(hours);
  }

  components = [...components, minutes, seconds];

  let prettyTime = components.map((t) => padTime(t)).join(":");
  if (showMs) {
    prettyTime += `.${padTime(ms, 3)}`;
  }

  return <time className={styles["time"]}>{prettyTime}</time>;
}
