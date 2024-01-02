// React
import { useState } from "react";

// Ours - Components
import VisualTimer from "@/components/timer/VisualTimer";
import TimerControls from "@/components/timer/TimerControls";

// Ours - Contexts
import { useClockContext } from "@/contexts/clock/ClockContext";

// Ours - Hooks
import useInterval from "@/hooks/useInterval";

// Ours - Types
import { getElapsed } from "@/types/clock";

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
