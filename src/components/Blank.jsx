import React from "react";
import { Outlet } from "react-router-dom";

export const Blank = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
