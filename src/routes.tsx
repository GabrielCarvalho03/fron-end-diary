import { createBrowserRouter } from "react-router-dom";
import { InitialForm } from "./pages/initial-form/initial-form";
import { WebPage } from "./pages/webPage/web-page";
import { Home } from "./pages/home/home";
import { Subscriber } from "./pages/subscriber/subscriber";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/subscriber",
    element: <Subscriber />,
  },
  {
    path: "/form",
    element: <InitialForm />,
  },
  {
    path: "/webPage/:userId",
    element: <WebPage />,
  },
]);
