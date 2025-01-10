import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@containers/home";
import CalculationMap from "@containers/calculationMap";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculation" element={<CalculationMap />} />
    </Routes>
  );
};

export default AppRouter;
