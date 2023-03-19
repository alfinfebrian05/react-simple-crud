import { Routes, Route } from "react-router-dom";
import React from "react";

import routers from "../../config/router";

const RouterRoot = () => {
  return (
    <Routes>
      {routers.map((router, idx) => {
        return (
          <Route path={router.pathname} element={router.element} key={idx} />
        );
      })}
    </Routes>
  );
};

export default RouterRoot;
