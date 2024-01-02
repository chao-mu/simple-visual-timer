// Ours - Providers
import ClockProvider from "@/contexts/clock/ClockProvider";

// Ours - Components
import VisualTimer from "@/components/timer/VisualTimer";
import TimerControls from "@/components/timer/TimerControls";

// Ours - Styles
import styles from "./Timer.module.css";

export default function Timer() {
  return (
    <main className={styles["main"]}>
      <ClockProvider>
        <VisualTimer />
        <TimerControls />
      </ClockProvider>
    </main>
  );
}
