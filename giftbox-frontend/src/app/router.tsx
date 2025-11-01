import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/Home";
import Build from "@/pages/Build";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Auth from "@/pages/Auth";
import Header from "@/components/Header/Header";

function RootLayout() {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "build", element: <Build /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "auth", element: <Auth /> },
    ],
  },
]);
