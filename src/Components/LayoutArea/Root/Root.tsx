import { Outlet, useOutlet } from "react-router-dom";
import RoutesNav from "../../Routes/RoutesNav";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import { t } from "i18next";

export default function Root() {
  const outlet = useOutlet();

  return (
    // Fragment to render 2 components
    <>
      <Navbar routes={RoutesNav} />

      <div dir={t("SideOfScreen")}>
        { outlet ? <Outlet /> : <HomePage />}
      </div>
    </>
  );
}










// return (
//   <div dir={t("SideOfScreen")}>
//     <Navbar routes={RoutesNav} />
//     {outlet ? <Outlet /> : <HomePage />}
//   </div>
// );

// export default function Root() {
//   const outlet = useOutlet();

//   return (
//       // Fragment to render 2 components
//       <>
//         <Navbar routes={RoutesNav} />
//         {outlet ? (
//           <>
//             <Outlet />
//           </>
//         ) : (
//           <>
//             <HomePage />
//           </>
//         )}
//       </>
//   );
// }
