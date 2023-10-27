import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DriversCard from "../components/DriversCard";

function Drivers() {
  return (
    <>
      <Header />
      <Outlet />
      <DriversCard />
    </>
  );
}

export default Drivers;
