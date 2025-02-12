// import { useState } from "react";
import React from "react";
import "./input.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";

export default function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Topbar />
      <div>
        <Sidebar />
        {router}
      </div>
    </>
  );
}
