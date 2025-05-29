import React from "react";
import "./App.css";

//React Router
import { useRoutes, BrowserRouter } from "react-router-dom";

//Components
import Homepage from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Layout from "./components/Layouts/Layout";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "services", element: <Services /> },
      ],
    },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;