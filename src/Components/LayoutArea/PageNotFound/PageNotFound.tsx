import React from "react";
import "./PageNotFound.css";
import { useRouteError } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RoutesNav from "../../Routes/RoutesNav";

function PageNotFound() {
  const error = useRouteError();

  return (
    <div className="PageNotFound">
      <Navbar routes={RoutesNav} />

      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default PageNotFound;
