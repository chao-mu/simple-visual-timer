// Ours - Providers
import ClockProvider from "@/contexts/clock/ClockProvider";

// Ours - Components
import VisualTimer from "@/components/timer/VisualTimer";
import TimerControls from "@/components/timer/TimerControls";

export default function Timer() {
  return (
    <main>
      <ClockProvider>
        <h1>Timer</h1>
        <VisualTimer />
        <TimerControls />
      </ClockProvider>
    </main>
  );
}
