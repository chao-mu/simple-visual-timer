import { useClockContext } from "@/contexts/clock/ClockContext";

import { getElapsed } from "@/types/clock";

export default function VisualTimer() {
  const clock = useClockContext();
  const elapsed = getElapsed(clock);

  return <div>{elapsed}</div>;
}
