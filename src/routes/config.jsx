// Ours - Routes - Pages
import Landing from "./Landing";
import Timer from "./Timer";

// Ours - Components
import { FallbackForRouter } from "@/common/components";

// Ours - Routes
import Root from "./Root";
import TimerSync from "./TimerSync";

export default [
  {
    path: "/",
    element: <Root />,
    errorElement: <FallbackForRouter />,
    id: "root",
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "timer",
        element: <Timer />,
      },
      {
        path: "perpetual",
        element: <TimerSync />,
      },
    ],
  },
];
