// Ours - Contexts
import { ClockContext, ClockDispatchContext } from "./ClockContext";

// Ours - Clock
import { clockReducer } from "@/features/timer/reducers/clockReducer";
import { createClock, pauseClock } from "@/features/timer/utils/clock";

// Ours - Storage
import useSessionReducer from "@/features/storage/hooks/useSessionReducer";
import useInterval from "@/common/hooks/useInterval";

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
