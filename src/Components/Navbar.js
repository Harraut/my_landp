/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
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

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
    },
    {
      text: "Sobre nosotros",
      icon: <InfoIcon />,
    },
    {
      text: "Nuestros Proyectos",
      icon: <LaptopChromebookRoundedIcon />,
    },
    {
      text: "Miembros",
      icon: <Groups />,
    },
    {
      text: "Contáctanos",
      icon: <PhoneRoundedIcon />,
    },

  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home-text-section">Inicio</a>
        <a href="#about-section-container">Sobre nosotros</a>
        <a href="#work-section-wrapper">Nuestros proyectos</a>
        <a href="#members-section-wrapper">Miembros</a>
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
                <ListItemButton>
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
