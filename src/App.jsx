import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./pages/RootLayout";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        // { path: "create", element: <Create /> },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
      {/* <h1 className="text-red-900 text-3xl">Hello world!!!</h1> */}
    </div>
  );
}

export default App;
