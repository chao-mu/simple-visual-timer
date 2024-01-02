// React
import { createContext, useContext } from "react";

export const ClockContext = createContext(null);
export const ClockDispatchContext = createContext(null);

export const useClockContext = () => {
  const context = useContext(ClockContext);
  if (!context) {
    throw new Error("useClockContext must be used within a ClockProvider");
  }

  return context;
};

export const useClockDispatchContext = () => {
  const context = useContext(ClockDispatchContext);
  if (!context) {
    throw new Error(
      "useClockDispatchContext must be used within a ClockProvider",
    );
  }

  return context;
};
