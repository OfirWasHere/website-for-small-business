import { Outlet, useOutlet } from "react-router-dom";
import RoutesNav from "../../Routes/RoutesNav";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";

export default function Root() {
  const outlet = useOutlet();

  return (
    // Fragment to render 2 components
    <>
      <Navbar routes={RoutesNav} />
      {outlet ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <HomePage />
        </>
      )}
    </>
  );
}
