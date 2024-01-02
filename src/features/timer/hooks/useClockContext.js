// React
import { useContext } from "react";

// Ours - Clocks
import { ClockContext } from "../contexts/ClockContext";

export default function useClockContext() {
  const context = useContext(ClockContext);
  if (!context) {
    throw new Error("useClockContext must be used within a ClockProvider");
  }

  return context;
}
