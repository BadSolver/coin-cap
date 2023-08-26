import { Header } from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
