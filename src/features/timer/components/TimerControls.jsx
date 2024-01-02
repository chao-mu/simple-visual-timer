// Ours - Clocks
import useTimerContext from "@/features/timer/hooks/useTimerContext";
import useTimerDispatchContext from "@/features/timer/hooks/useTimerDispatchContext";

import {
  FaPlay as PlayIcon,
  FaPause as PauseIcon,
  FaStop as StopIcon,
} from "react-icons/fa";

import { TimerActionType } from "@/features/timer/reducers/timerReducer";

export default function TimerControls() {
  const {
    clock: { paused },
  } = useTimerContext();

  const dispatch = useTimerDispatchContext();

  const handlePlay = () => dispatch({ type: TimerActionType.PLAY });
  const handlePause = () => dispatch({ type: TimerActionType.PAUSE });
  const handleStop = () => dispatch({ type: TimerActionType.STOP });

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
