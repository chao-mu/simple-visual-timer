// React
import { useReducer } from "react";

// react-router-dom
import { useSearchParams } from "react-router-dom";

// Ours - Timer
import { TimerContext, TimerDispatchContext } from "./TimerContext";
import { timerReducer, TimerActionType } from "../reducers/timerReducer";
import { createClock, pauseClock } from "../utils/clock";

// Ours - Storage
import { useStorage, createSessionStorageKey } from "@/features/storage";

// Ours - Hooks
import { useInterval } from "@/common/hooks";

export default function TimerProvider({ children }) {
  const [searchParams] = useSearchParams();
  const [initialClock, saveClock] = useStorage(
    createSessionStorageKey("clock"),
    createClock(),
  );

  const [timer, dispatch] = useReducer(timerReducer, {
    clock: initialClock,
    duration: Number(searchParams.get("time") || 10000),
    completed: false,
  });

  useInterval(() => {
    saveClock(pauseClock(timer.clock));
  }, 1000);

  useInterval(() => {
    dispatch({ type: TimerActionType.TICK });
  }, 20);

  return (
    <TimerContext.Provider value={timer}>
      <TimerDispatchContext.Provider value={dispatch}>
        {children}
      </TimerDispatchContext.Provider>
    </TimerContext.Provider>
  );
}
