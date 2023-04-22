import { Outlet } from "react-router-dom";
import RoutesNav from "../../Routes/RoutesNav";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    // Fragment to render 2 components
    <>
      <Navbar routes={RoutesNav} />
      <Outlet />
    </>
  );
}
