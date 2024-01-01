// Ours - Styles
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>Simple Visual Timer</h1>
        <p>
          Our purposeis to provide a clutter-free timer that embraces minimalism
          in order to not torture neurdivergent brains like ours.
        </p>
        <button>Start Timer</button>
      </section>
    </main>
  );
}
