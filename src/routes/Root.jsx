// react-router-dom
import { Outlet } from "react-router-dom";

// Ours - Providers
import TimerProvider from "@/features/timer/contexts/TimerProvider";

export default function Root() {
  return (
    <TimerProvider>
      <Outlet />
    </TimerProvider>
  );
}
