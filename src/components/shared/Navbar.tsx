"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbMenu3 } from "react-icons/tb";

const activeStyle = {
  color: "#7927FF",
  fontWeight: "bold",
};

const inactiveStyle = {
  color: "#000000",
};

const drawerWidth = 280;
const navItems = ["About Me", "Resume", "Projects", "Contact"];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Drawer content with close button
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      {/* Close button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        {/* close icon  */}
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              href={
                item === "About Me"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              style={{ textDecoration: "none", width: "100%" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item}
                  sx={
                    (item === "About Me" && pathname === "/") ||
                    (item !== "About Me" &&
                      pathname === `/${item.toLowerCase().replace(" ", "")}`)
                      ? activeStyle
                      : inactiveStyle
                  }
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className="bg-[#DFE2C6] mt-5">
      <CssBaseline />
      <AppBar
        position="sticky"
        component="nav"
        className="max-w-7xl mx-auto shadow-none bg-[#DFE2C6]"
      >
        <Toolbar className="">
          {/* mobile menu logo  */}
          <Typography
            variant="h6"
            sx={{ my: 2, display: { sm: "none" }, flexGrow: 1 }}
          >
            <div className="items-center p-2 rounded-lg">
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-[#7927FF] rounded-sm"></div>
                <h3 className="font-bold text-black text-nowrap">
                  Pallab Kumar Sarker
                </h3>
              </div>
              <h3 className="text-black text-base font-light text-nowrap">
                Web Developer
              </h3>
            </div>
          </Typography>
          {/* Mobile menu button */}
          <IconButton
            className="text-[#7927FF]"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <TbMenu3 className="text-2xl" />
          </IconButton>

          {/*desktop logo Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="font-semibold text-lg text-black"
          >
            <div className="flex items-center space-x-2 p-2 rounded-lg flex-shrink-1">
              <div className="w-3 h-3 bg-[#7927FF] rounded-sm"></div>
              <span className="font-bold text-black">Pallab Kumar Sarker</span>
              <span className="text-black text-base font-light">
                / Web Developer
              </span>
            </div>
          </Typography>

          {/* Desktop navigation */}
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "flex" },
              alignItems: "center",
              flexGrow: 1,
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "About Me"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                style={{ textDecoration: "none" }}
              >
                <Button
                  style={
                    (item === "About Me" && pathname === "/") ||
                    (item !== "About Me" &&
                      pathname === `/${item.toLowerCase().replace(" ", "")}`)
                      ? activeStyle
                      : inactiveStyle
                  }
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          PaperProps={{
            sx: {
              backgroundColor: "#DFE2C6",
            },
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
