// React
import { useEffect, useState } from "react";

// Ours - Timer
import {
  useTimerContext,
  getElapsed,
  VisualTimer,
  TimerControls,
  TimeDisplay,
  useTimerDispatchContext,
  TimerActionType,
} from "@/features/timer";

// Ours - Hooks
import { useInterval } from "@/common/hooks";

import styles from "./Timer.module.css";
import { Footer } from "@/common/components/Footer";

export default function Timer() {
  const { clock, duration } = useTimerContext();
  const dispatch = useTimerDispatchContext();
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    dispatch({ type: TimerActionType.PLAY });
  }, [dispatch]);

  useInterval(() => {
    setElapsed(getElapsed(clock));
  }, 20);

  const timerEnd = duration;
  const progress = elapsed / timerEnd;

  const clockProgress = {
    segmentTranspired: elapsed,
    segmentLength: duration,
  };

  return (
    <main className={styles["main"]}>
      <VisualTimer progress={progress} />
      <TimerControls />
      <Footer clockProgress={clockProgress} />
    </main>
  );
}
