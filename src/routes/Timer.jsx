// React
import { useState } from "react";

// Ours - Components

// Ours - Clocks
import useClockContext from "@/features/timer/hooks/useClockContext";
import { getElapsed } from "@/features/timer/utils/clock";
import VisualTimer from "@/features/timer/components/VisualTimer";
import TimerControls from "@/features/timer/components/TimerControls";

// Ours - Hooks
import useInterval from "@/common/hooks/useInterval";

// Ours - Styles
import styles from "./Timer.module.css";

export default function Timer() {
  const clock = useClockContext();
  const [elapsed, setElapsed] = useState(0);

  useInterval(() => {
    setElapsed(getElapsed(clock));
  }, 20);

  const timerEnd = 10000;
  const progress = elapsed / timerEnd;

  return (
    <main className={styles["main"]}>
      <VisualTimer progress={progress} />
      <TimerControls />
    </main>
  );
}
