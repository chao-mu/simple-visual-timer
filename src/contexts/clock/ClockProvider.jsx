// Ours - Contexts
import {
  ClockContext,
  ClockDispatchContext,
} from "@/contexts/clock/ClockContext";

// Ours - Reducer
import { clockReducer } from "@/reducers/clockReducer";

// Ours - Hooks
import useSessionReducer from "@/hooks/useSessionReducer";
import useInterval from "@/hooks/useInterval";

// Ours - Types
import { createClock, pauseClock } from "@/types/clock";

export default function ClockProvider({ children }) {
  const [clock, dispatch, save] = useSessionReducer({
    subkey: "clock",
    reducer: clockReducer,
    initialState: createClock(),
    transform: (clock) => pauseClock(clock),
  });

  useInterval(() => {
    save();
  }, 1000);

  return (
    <ClockContext.Provider value={clock}>
      <ClockDispatchContext.Provider value={dispatch}>
        {children}
      </ClockDispatchContext.Provider>
    </ClockContext.Provider>
  );
}
