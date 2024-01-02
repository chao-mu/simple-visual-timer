// React
import { useContext } from "react";

// Ours - Clocks
import { TimerDispatchContext } from "../contexts/TimerContext";

export default function useTimerDispatchContext() {
  const context = useContext(TimerDispatchContext);
  if (!context) {
    throw new Error(
      "useTimerDispatchContext must be used within a TimerProvider",
    );
  }

  return context;
}
