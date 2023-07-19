import { createBrowserRouter } from "react-router-dom";
import Root from "@components/Root";
import Explore from "@screens/Explore";
import Home from "@screens/Home";
import NewThread from "@screens/NewThread";
import Notification from "@screens/Notification";
import Profile from "@screens/Profile";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },

      {
        path: "newThread",
        element: <NewThread />,
      },

      {
        path: "notification",
        element: <Notification />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default RootRouter;
