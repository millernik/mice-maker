import { createBrowserRouter, Outlet, useLocation } from "react-router";
import Home from "./pages/Home";
import MajorCongresses from "./pages/MajorCongresses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CongressDetail from "./pages/CongressDetail";
import { useEffect, useState } from "react";

function Root() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setVisible(true);
      window.scrollTo(0, 0);
    }, 60);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease",
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </div>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        color: "#6b6b6b",
        gap: 16,
        background: "#f0eadf",
      }}
    >
      <h1 style={{ fontSize: 48, color: "#3f3f3f", margin: 0, fontWeight: 700 }}>404</h1>
      <p style={{ fontSize: 16, margin: 0 }}>Page not found</p>
      <a href="/" style={{ color: "#c6a56b", fontSize: 14, fontWeight: 600 }}>
        Return home
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "congresses", Component: MajorCongresses },
      { path: "congresses/:id", Component: CongressDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
