import { Navigate } from "react-router";
import WelcomeComponent from "../components/Welcome.component";
import OverviewPage from "../pages/Overview.page";
import SignUpPage from "../pages/SignUp.page";

export const routes = [
  {
    path: "/",
    element: <SignUpPage />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "welcome",
    element: <WelcomeComponent />,
  },
  { path: "overview", element: <OverviewPage /> },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
