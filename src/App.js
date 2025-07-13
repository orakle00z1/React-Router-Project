import React from "react";
import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./input.css";

export default function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Navbar />
      {router}
    </>
  );
}
