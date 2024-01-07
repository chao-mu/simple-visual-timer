// react-router-dom
import { useNavigate } from "react-router-dom";

// Ours - Timer
import {
  TimerForm,
  useTimerDispatchContext,
  TimerActionType,
} from "@/features/timer";

// Ours - Styles
import styles from "./Landing.module.css";

export default function Landing() {
  const navigate = useNavigate();

  const dispatch = useTimerDispatchContext();

  const onSubmitTime = (time) => {
    dispatch({
      type: TimerActionType.SET_DURATION,
      payload: { duration: time },
    });
    navigate(`/timer?time=${time}`);
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles["hero__title"]}>Simple Visual Timer</h1>
        <p>
          Our purpose is to provide a clutter-free timer that embraces
          minimalism and allows you to focus on the task at hand.
        </p>
        <TimerForm onSubmitTime={onSubmitTime} />
      </section>
    </main>
  );
}
