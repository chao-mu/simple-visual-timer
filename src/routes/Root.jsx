// react-router-dom
import { Outlet } from "react-router-dom";

// Ours - Providers
import ClockProvider from "@/features/timer/contexts/ClockProvider";

export default function Root() {
  return (
    <ClockProvider>
      <Outlet />
    </ClockProvider>
  );
}
