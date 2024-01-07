// Ours - Timer
import useTimerContext from "../hooks/useTimerContext";
import useTimerDispatchContext from "../hooks/useTimerDispatchContext";
import { TimerActionType } from "../reducers/timerReducer";

// Ours - Style
import styles from "./TimerControls.module.css";

import {
  FaPlay as PlayIcon,
  FaPause as PauseIcon,
  FaStop as StopIcon,
} from "react-icons/fa";

export default function TimerControls() {
  const {
    clock: { paused },
  } = useTimerContext();

  const dispatch = useTimerDispatchContext();

  const handlePlay = () => dispatch({ type: TimerActionType.PLAY });
  const handlePause = () => dispatch({ type: TimerActionType.PAUSE });
  const handleStop = () => dispatch({ type: TimerActionType.STOP });

  return (
    <div className={styles["timer-controls"]}>
      {paused && (
        <button className={styles["icon-button"]} onClick={handlePlay}>
          <PlayIcon />
        </button>
      )}
      {!paused && (
        <button className={styles["icon-button"]} onClick={handlePause}>
          <PauseIcon />
        </button>
      )}
      <button className={styles["icon-button"]} onClick={handleStop}>
        <StopIcon />
      </button>
    </div>
  );
}
