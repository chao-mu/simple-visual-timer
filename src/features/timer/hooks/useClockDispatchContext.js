// React
import { useContext } from "react";

// Ours - Clocks
import { ClockDispatchContext } from "../contexts/ClockContext";

export default function useClockDispatchContext() {
  const context = useContext(ClockDispatchContext);
  if (!context) {
    throw new Error(
      "useClockDispatchContext must be used within a ClockProvider",
    );
  }

  return context;
}
