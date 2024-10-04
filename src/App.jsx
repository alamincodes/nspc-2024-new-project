import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import Quiz from "./pages/quiz/Quiz";
import SingleQuiz from "./pages/quiz/SingleQuiz";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <>Home</>,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/quiz/:id",
          element: <SingleQuiz />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
