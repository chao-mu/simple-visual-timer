// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// Ours - Timer
import {
  TimerForm,
  useTimerDispatchContext,
  TimerActionType,
} from "@/features/timer";

// Ours - Styles
import styles from "./Landing.module.css";

// Ours - Hooks
import useNotify from "@/common/hooks/useNotify";
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [, requestNotify] = useNotify();

  const dispatch = useTimerDispatchContext();

  const onSubmitTime = (time) => {
    dispatch({
      type: TimerActionType.SET_DURATION,
      payload: { duration: time },
    });
    navigate(`/timer?time=${time}`);
  };

  const onPerpetual = () => requestNotify();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles["hero__title"]}>Simple Visual Timer</h1>
        <p>
          Our purpose is to provide a clutter-free timer that embraces
          minimalism and allows you to focus on the task at hand.
        </p>
        <TimerForm onSubmitTime={onSubmitTime} />
        <p>
          Also! Checkout our{" "}
          <Link onClick={() => onPerpetual()} to="/perpetual">
            Perpetual Sprint Room
          </Link>
        </p>
      </section>
    </main>
  );
}
