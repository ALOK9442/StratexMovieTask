import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
