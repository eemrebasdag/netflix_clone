import "./App.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ErrorPage from "./pages/error/ErrorPage";
import Modal from "./pages/Modal/Modal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/watch", element: <Watch></Watch> },
      { path: "/modal", element: <Modal></Modal> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/watch", element: <Watch></Watch> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
