import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Navbar = () => {
  const [menus, setMenus] = useState([
    {
      title: " منوی اول",
      display: false,
    },
    {
      title: "منوی دوم",
      display: false,
    },
    {
      title: "منوی سوم",
      display: true,
    },
    {
      title: "منوی چهارم",
      display: false,
    },
  ]);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenMenuList = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseMenuList = () => {
    setAnchorElUser(null);
  };

  const handleSwitch = (e) => {
    setMenus((prvState) =>
      prvState.map((item) =>
        item.title === e.target.name
          ? { title: item.title, display: !item.display }
          : item
      )
    );
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menus.map((item) => (
                <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                  {item.display && (
                    <Typography textAlign="center">{item.title}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menus.map(
              (item) =>
                item.display && (
                  <Button
                    key={item.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {item.title}
                  </Button>
                )
            )}
            <Tooltip title="Open menu list">
              <IconButton onClick={handleOpenMenuList}>
                <MoreHorizIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              PaperProps={{
                style: {
                  width: "20ch",
                },
              }}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseMenuList}
            >
              <FormGroup>
                {menus.map((item) => (
                  <FormControlLabel
                    key={item.title}
                    control={
                      <Switch
                        checked={item.display}
                        onChange={handleSwitch}
                        name={item.title}
                      />
                    }
                    label={item.title}
                  />
                ))}
              </FormGroup>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO تیکبورت
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
