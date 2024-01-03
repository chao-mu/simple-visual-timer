// react-router-dom
import { Outlet } from "react-router-dom";

// Ours - Timer
import { TimerProvider } from "@/features/timer";

export default function Root() {
  return (
    <TimerProvider>
      <Outlet />
    </TimerProvider>
  );
}
