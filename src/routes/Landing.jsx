// react-router-dom
import { useNavigate } from "react-router-dom";

// Ours - Styles
import styles from "./Landing.module.css";

// Ours - Components
import TimerForm from "@/components/timer/TimerForm";

export default function Landing() {
  const navigate = useNavigate();

  const onSubmitTime = (time) => {
    navigate(`/timer?time=${time}`);
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles["hero__title"]}>Simple Visual Timer</h1>
        <p>
          Our purposeis to provide a clutter-free timer that embraces minimalism
          in order to not torture neurdivergent brains like ours.
        </p>
        <TimerForm onSubmitTime={onSubmitTime} />
      </section>
    </main>
  );
}
