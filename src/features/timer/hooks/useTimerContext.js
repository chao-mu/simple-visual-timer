// React
import { useContext } from "react";

// Ours - Clocks
import { TimerContext } from "../contexts/TimerContext";

export default function useTimerContext() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }

  return context;
}
