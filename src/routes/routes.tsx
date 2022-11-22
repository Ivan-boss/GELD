import { Navigate } from "react-router";
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
    path: "*",
    element: <Navigate to="/" />,
  },
];
