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
import { useTheme } from "@mui/material";
import { ThemeButton } from "./ThemeButton";

const navItems = ["About Me", "Resume", "Projects", "Contact"];

const Navbar = () => {
  const theme = useTheme();
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
          <CloseIcon className={`text-[${theme.palette.text.primary}]`} />
        </IconButton>
      </Box>

      <Divider />

      <List className="gap-7">
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              href={
                item === "About Me"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              style={{ textDecoration: "none", width: "100%" }}
              onClick={handleDrawerToggle}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item}
                  sx={
                    (item === "About Me" && pathname === "/") ||
                    (item !== "About Me" &&
                      pathname === `/${item.toLowerCase().replace(" ", "")}`)
                      ? { color: theme.palette.secondary.main }
                      : { color: theme.palette.text.primary }
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
    <Box
      sx={{ backgroundColor: theme.palette.primary.light, marginTop: "20px" }}
    >
      <CssBaseline />
      <AppBar
        position="sticky"
        component="nav"
        className="container mx-auto shadow-none"
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        <Toolbar className="space-x-4">
          {/* mobile part  */}

          {/* mobile menu logo  */}
          <Typography
            variant="h6"
            sx={{
              my: 2,
              display: { sm: "none" },
              flexGrow: 1,
              color: theme.palette.primary.contrastText,
            }}
          >
            <div className="items-center p-1 rounded-lg">
              <div className="flex gap-1 items-center">
                <div
                  className={`w-3 h-3 bg-[#7927FF] rounded-sm mb-[2px]`}
                ></div>
                <h3
                  className={`font-semibold text-xl text-[${theme.palette.primary.contrastText}] text-nowrap`}
                >
                  Pallab Kumar Sarker
                </h3>
              </div>
              <h3
                className={`text-[${theme.palette.primary.contrastText}] text-base font-light text-nowrap`}
              >
                Web Developer
              </h3>
            </div>
          </Typography>

          {/* theme toggle  */}
          <div className="md:hidden">
            <ThemeButton />
          </div>

          {/* Mobile menu button */}
          <IconButton
            className=""
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: theme.palette.primary.main,
            }}
          >
            <TbMenu3 className={`text-2xl text-[#7927FF]`} />
          </IconButton>

          {/* desktop part  */}

          {/*desktop logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            <div className="flex items-center gap-x-10">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 bg-[${theme.palette.primary.main}] rounded-sm`}
                ></div>
                <p
                  className={`text-2xl font-semibold text-[${theme.palette.primary.contrastText}]`}
                >
                  Pallab Kumar Sarker
                </p>
                <p
                  className={`text-xl font-light text-[${theme.palette.primary.contrastText}]`}
                >
                  / Web Developer
                </p>
              </div>

              {/* theme toggle button  */}
              <div className="hidden md:block">
                <ThemeButton />
              </div>
            </div>
          </Typography>

          {/* Desktop navigation */}
          <div className="flex gap-10 justify-end">
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
                    className="text-xl font-medium"
                    style={
                      (item === "About Me" && pathname === "/") ||
                      (item !== "About Me" &&
                        pathname === `/${item.toLowerCase().replace(" ", "")}`)
                        ? { color: theme.palette.primary.main }
                        : { color: theme.palette.primary.contrastText }
                    }
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.background.paper,
            },
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
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
