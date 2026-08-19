import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts";
import BootCamp from "./pages/BootCamp";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
       children: [
      { index: true, element: <BootCamp /> },
       ]
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
