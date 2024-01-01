// Ours - Routes - Pages
import Landing from "./Landing";
import Timer from "./Timer";

// Ours - Components
import { FallbackForRouter } from "@/components/system/FallbackPage";

// Ours - Routes
import Root from "./Root";

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
    ],
  },
];