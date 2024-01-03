// React
import { useState } from "react";

// Ours - Timer
import {
  useTimerContext,
  getElapsed,
  VisualTimer,
  TimerControls,
  TimeDisplay,
} from "@/features/timer";

// Ours - Hooks
import { useInterval } from "@/common/hooks";

import styles from "./Timer.module.css";

export default function Timer() {
  const { clock, duration } = useTimerContext();
  const [elapsed, setElapsed] = useState(0);

  useInterval(() => {
    setElapsed(getElapsed(clock));
  }, 20);

  const timerEnd = duration;
  const progress = elapsed / timerEnd;

  return (
    <main className={styles["main"]}>
      <VisualTimer progress={progress} />
      <TimeDisplay timeMs={elapsed} showMs={true} />
      <TimerControls />
    </main>
  );
}
