import {
  useClockContext,
  useClockDispatchContext,
} from "@/contexts/clock/ClockContext";

import {
  FaPlay as PlayIcon,
  FaPause as PauseIcon,
  FaStop as StopIcon,
} from "react-icons/fa";

import { ClockActionType } from "@/reducers/clockReducer";

export default function TimerControls() {
  const { paused } = useClockContext();

  const dispatch = useClockDispatchContext();

  const handlePlay = () => dispatch({ type: ClockActionType.PLAY });
  const handlePause = () => dispatch({ type: ClockActionType.PAUSE });
  const handleStop = () => dispatch({ type: ClockActionType.RESET });

  return (
    <div>
      {paused && (
        <button onClick={handlePlay}>
          <PlayIcon />
        </button>
      )}
      {!paused && (
        <button onClick={handlePause}>
          <PauseIcon />
        </button>
      )}
      <button onClick={handleStop}>
        <StopIcon />
      </button>
    </div>
  );
}
