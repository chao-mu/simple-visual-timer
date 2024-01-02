// react-hook-form
import { useForm } from "react-hook-form";

// Ours - Utils
import { timeInWords } from "@/common/utils/time";

// Ours - Styles
import styles from "./TimerForm.module.css";

export default function TimerForm({ onSubmitTime }) {
  const { register, handleSubmit } = useForm();

  const presets = [
    // 10 minutes
    10,
    // 15 minutes
    15,
    // 25 minutes
    25,
    // 30 minutes
    30,
    // 45 minutes
    45,
    // 50 minutes
    50,
    // 1 hour
    1 * 60,
    // 2 hours
    2 * 60,
  ].map((minutes) => minutes * 60 * 1000);

  const onSubmit = (data) => {
    onSubmitTime(data.time);
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["form-group"]}>
        <label htmlFor="time">Timer Length</label>

        <select {...register("time", { required: true })}>
          {presets.map((num) => (
            <option key={num} value={num}>
              {timeInWords(num)}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Start</button>
    </form>
  );
}
