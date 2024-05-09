// React
import { useEffect, useRef, useState } from "react";

// Ours - Timer
import { VisualTimer } from "@/features/timer";

const Ms = 1;
const Second = 1000 * Ms;
const Minute = 60 * Second;
// const Hour = 60 * Minute;

const BreakLength = 5 * Minute;
const WorkLength = 25 * Minute;
const TotalPeriodLength = BreakLength + WorkLength;

function getPeriodTranspired(periodLength) {
  var now = new Date();
  const periodsSinceEpoch = now.getTime() / periodLength;

  return (periodsSinceEpoch - Math.floor(periodsSinceEpoch)) * periodLength;
}

// Ours - Hooks
import { useInterval } from "@/common/hooks";

import styles from "./Timer.module.css";
import { Footer } from "@/common/components/Footer";
import useNotify from "@/common/hooks/useNotify";

const periods = {
  break: {
    title: "Break",
    length: BreakLength,
  },
  work: {
    title: "Work",
    length: WorkLength,
  },
};

function getClockProgress(periodLength) {
  const periodTranspired = getPeriodTranspired(periodLength);
  const kind = periodTranspired - WorkLength > 0 ? "break" : "work";
  const transpired =
    kind == "break" ? periodTranspired - WorkLength : periodTranspired;
  const { title, length } = periods[kind];

  return {
    title,
    segmentTranspired: transpired,
    segmentLength: length,
    periodLength,
    periodTranspired,
    kind,
  };
}

export default function Perpetual() {
  const [notify] = useNotify();
  const audioRef = useRef(null);

  const [clockProgress, setClockProgress] = useState(
    getClockProgress(TotalPeriodLength),
  );

  useEffect(() => {
    audioRef.current.play();
  }, []);

  useInterval(() => {
    const newProgress = getClockProgress(TotalPeriodLength);
    if (newProgress.kind != clockProgress.kind) {
      notify("Times Up!", `Next up: ${title}`);
    }

    setClockProgress(newProgress);
  }, 100);

  const { title, segmentTranspired, segmentLength } = clockProgress;

  return (
    <main className={styles["main"]}>
      <h1>{title}</h1>
      <VisualTimer progress={segmentTranspired / segmentLength} />
      <Footer clockProgress={clockProgress} />
      <audio ref={audioRef}>
        <source src="/audio/alarm.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}
