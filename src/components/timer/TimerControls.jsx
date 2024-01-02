import {
  useClockContext,
  useClockDispatchContext,
} from "@/contexts/clock/ClockContext";

export default function TimerControls() {
  const { paused } = useClockContext();
  const dispatch = useClockDispatchContext();

  const handleResume = () => dispatch({ type: "RESUME" });
  const handleStop = () => dispatch({ type: "STOP" });
  const handlePause = () => dispatch({ type: "PAUSE" });

  return (
    <div>
      <button onClick={handleResume} disabled={!paused}>
        Start
      </button>
      <button onClick={handlePause} disabled={!paused}>
        Pause
      </button>
      <button onClick={handleStop} disabled={paused}>
        Stop
      </button>
    </div>
  );
}
