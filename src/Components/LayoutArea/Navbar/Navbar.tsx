import React from "react";
import RoutesModel from "../../Models/RoutesModel";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

interface NavbarProps {
  routes: RoutesModel[];
}

// Drawer content width:
const drawerWidth = 240;

function Navbar(props: NavbarProps): JSX.Element {
  // Nav Items:
  const navItems = props.routes;

  // Mobile view toggler
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Drawer toggler:
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box>
      {/* Nav logo or Name */}
      <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
        Company Name
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} sx={{ textAlign: "center" }}>
            {/* Route Link */}
            <NavLink to={item.path} className="DrawerNavbar">
              <ListItemButton>
                <ListItemText primary={item.routeName} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="Navbar">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              {/* Menu burger icon */}
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>
            {/* Logo  */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              LOGO
            </Typography>
            {/* Displayed items */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  <Button sx={{ color: "#fff" }}>{item.routeName}</Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        {/* Drawer */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {/* Drawer displayed here */}
            {drawer}
          </Drawer>
        </Box>
      </Box>
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
//         {props.routes.map((e, index) => (
//           <li key={index}>
//             <NavLink to={e.path} className="link">
//               {e.routeName}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
