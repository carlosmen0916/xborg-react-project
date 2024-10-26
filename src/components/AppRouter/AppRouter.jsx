import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../../modules";
export const AppRouter = (app) => {
    return (<Routes>
      <Route path="/" element={<AboutUs app={app}/>}/>
    </Routes>);
};
