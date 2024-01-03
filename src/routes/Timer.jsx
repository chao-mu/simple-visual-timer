// React
import { useState } from "react";

// Ours - Timers
import useTimerContext from "@/features/timer/hooks/useTimerContext";
import { getElapsed } from "@/features/timer/utils/clock";
import VisualTimer from "@/features/timer/components/VisualTimer";
import TimerControls from "@/features/timer/components/TimerControls";
import TimeDisplay from "@/features/timer/components/TimeDisplay";

// Ours - Hooks
import useInterval from "@/common/hooks/useInterval";

// Ours - Styles
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
