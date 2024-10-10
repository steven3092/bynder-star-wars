import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Character } from "./components/character/character.tsx";
import ErrorPage from "./components/error-page/error-page.tsx";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "character/:characterId/planet/:planetId",
    element: <Character />,
    errorElement: <ErrorPage />,
  },
]);

async function enableMocking() {
  if (import.meta.env.VITE_USE_MOCKS_SERVICE_WORKER === "false") {
    return;
  }
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
});
