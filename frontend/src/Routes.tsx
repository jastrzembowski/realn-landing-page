import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Rodo from "./rodos/Rodo";
import Privacy from "./rodos/Privacy";
import Contact from "./forms/Contact";
import Admin from "./forms/Agent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/dla-agentow", element: <Admin /> },
      { path: "/contact", element: <Contact /> },
      { path: "/obowiazek-informacyjny-rodo", element: <Rodo /> },
      { path: "/polityka-prywatnosci", element: <Privacy /> },
      { path: "*", element: <Navigate replace to="/" /> },
    ],
  },
]);
export default router;
