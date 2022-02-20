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
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Navbar = () => {
  const useStyles = makeStyles({
    rotate: {
      transform: "rotate(90deg)",
    },
    paper: {
      width: 140,
      minHeight: "100%",
      backgroundColor: "red",
    },
    button: {
      height: 40,
      borderRadius: 10,
      // marginTop: 10,
    },
  });
  const classes = useStyles();
  const [selected, useSelected] = useState(1);
  const [menus, setMenus] = useState([
    {
      id: 1,
      title: " منوی اول",
      display: true,
      clicked: true,
    },
    {
      id: 2,
      title: "منوی دوم",
      display: true,
      clicked: false,
    },
    {
      id: 3,
      title: "منوی سوم",
      display: true,
      clicked: false,
    },
    {
      id: 4,
      title: "منوی چهارم",
      display: true,
      clicked: false,
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
    console.log("ddd");
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
    <AppBar
      position="static"
      style={{
        backgroundColor: "#0089A7",
        marginTop: 30,
        position: "relative",
        right: 140,
      }}
    >
      {/* <Box
        style={{
          position: "absolute",
          height: "100%",
          width: 140,
          backgroundColor: "red",
          zIndex: 2,
        }}
      ></Box> */}

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box sx={{ width: 90 }}></Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <IconButton sx={{}}>
              <Avatar alt="Remy Sharp" src="favicon.ico" />
              <Typography style={{ color: "white" }}> نام کاربر </Typography>
            </IconButton>
            <HorizontalRuleIcon className={classes.rotate} sx={{ mt: 3 }} />
            {menus.map(
              (item) =>
                item.display && (
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Button
                        className={classes.button}
                        // variant="contained"
                        // color="success"
                        key={item.title}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {item.title}
                      </Button>
                      <HorizontalRuleIcon
                        className={classes.rotate}
                        sx={{ mt: 3 }}
                      />
                    </Box>
                  </>
                )
            )}

            <Tooltip title="Open menu list">
              <IconButton onClick={handleOpenMenuList}>
                <MoreHorizIcon style={{ fill: "white" }} />
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
              sx={{ mt: "55px" }}
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
          <Box>
            <IconButton>
              <SettingsRoundedIcon htmlColor="white" />
            </IconButton>
            <IconButton>
              <ReplayRoundedIcon htmlColor="white" />
            </IconButton>
            <IconButton>
              <PowerSettingsNewRoundedIcon htmlColor="white" />
            </IconButton>
          </Box>
          <HorizontalRuleIcon className={classes.rotate} />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO تیکبورت
          </Typography>
          <Box sx={{ width: 140 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
