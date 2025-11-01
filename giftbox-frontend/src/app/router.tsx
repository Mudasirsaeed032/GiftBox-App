import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Build from "../pages/Build";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AuthPage from "../pages/Auth";
import Header from "../components/Header/Header";
import Footer from "../components/Layout/Footer";

function RootLayout() {
    return (
        <div className="min-h-dvh bg-white text-gray-900">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
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
            { path: "auth", element: <AuthPage /> },
            { path: "account", element: <AuthPage /> },
        ],
    },
]);
