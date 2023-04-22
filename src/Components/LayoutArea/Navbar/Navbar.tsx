import React from "react";
import RoutesModel from "../../Models/RoutesModel";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  routes: RoutesModel[];
}

function Navbar(props: NavbarProps): JSX.Element {
  // Drawer width:
  const drawerWidth = 240;
  const navItems = ['Home', 'About', 'Contact'];
  const [mobileOpen, setMobileOpen] = React.useState(false);


  return (
    <div className="Navbar">


    </div>
  );
}

export default Navbar;















// https://codesandbox.io/s/d847to?file=/demo.tsx:707-846

// https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer


// function Navbar(props: NavbarProps): JSX.Element {
//   return (
//     <div className="Navbar">
//       <ul>
//         {props.routes.map((e) => (
//           <li>
//             <NavLink to={e.path} className="link">
//               {e.routeName}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
