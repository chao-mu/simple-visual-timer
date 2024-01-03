// react-router-dom
import { useSearchParams } from "react-router-dom";

// Ours - Timer
import { TimerContext, TimerDispatchContext } from "./TimerContext";
import { timerReducer, TimerActionType } from "../reducers/timerReducer";
import { createClock, pauseClock } from "../utils/clock";

// Ours - Storage
import { useSessionReducer } from "@/features/storage";

// Ours - Hooks
import { useInterval } from "@/common/hooks";

export default function TimerProvider({ children }) {
  const [searchParams] = useSearchParams();

  const [timer, dispatch, save] = useSessionReducer({
    subkey: "timer",
    reducer: timerReducer,
    initialState: {
      clock: createClock(),
      duration: Number(searchParams.get("time") || 10000),
      completed: false,
    },
    transform: (timer) => ({ ...timer, clock: pauseClock(timer.clock) }),
  });

  useInterval(() => {
    save();
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
