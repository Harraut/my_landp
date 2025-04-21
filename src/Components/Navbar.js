/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Groups from "@mui/icons-material/Groups";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
      path: "/"
    },
    {
      text: "Sobre nosotros",
      icon: <InfoIcon />,
      path: "/"
    },
    {
      text: "Nuestros Proyectos",
      icon: <LaptopChromebookRoundedIcon />,
      path: "/projects"
    },
    {
      text: "Miembros",
      icon: <Groups />,
      path: "/members"
    },
    {
      text: "Contáctanos",
      icon: <PhoneRoundedIcon />,
      path: "/"
    },

  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="/">Inicio</Link>
        <a href="#about-section-container">Sobre nosotros</a>
        <Link to="/projects">Nuestros proyectos</Link>
        <Link to="/members">Miembros</Link>
        <a href="#footer-wrapper">Contáctanos</a>

        <a href="#Contact">
          <button className="primary-button">Regístrate</button>
        </a>

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
