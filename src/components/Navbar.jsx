import React, { useState } from "react";
import "./Navbar.css";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { FormGroup, Menu, IconButton, Switch, Grid } from "@mui/material";

import { Typography, Icon, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

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
      display: false,
      clicked: false,
    },
  ]);

  const handleOpenMenuList = (event) => {
    setAnchorElUser(event.currentTarget);
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
    <div className="nav">
      <div className="container">
        <div className="avatar-border">
          <div className="avatar"></div>
        </div>
        <Box>
          <h3>نام کاربر : حامد مطری</h3>
          <h5>کد کاربر : ۹۰۹۷۶۸۷</h5>
        </Box>
        <HorizontalRuleIcon style={{ transform: "rotate(90deg)" }} />

        {/*  */}

        {menus.map(
          (item) =>
            item.display && (
              <Box key={item.id} sx={{ display: "flex" }}>
                <a
                  className="menu-item"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <h5>{item.title}</h5>
                </a>
                <HorizontalRuleIcon style={{ transform: "rotate(90deg)" }} />
              </Box>
            )
        )}

        {/*  */}

        <IconButton className="icon-navbar" onClick={handleOpenMenuList}>
          <MoreHorizIcon style={{ fill: "white" }} />
          {/* <img style={{ height: "100%" }} src="/more.svg" /> */}
        </IconButton>

        <Box sx={{ flexGrow: 0 }}>
          <Menu
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
              {/* {menus.map((item) => (
                <FormControlLabel
                  style={{
                    fontFamily: "Yekan",
                  }}
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
              ))} */}
              {menus.map((item) => (
                <Grid
                  key={item.id}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <span>{item.title}</span>
                  <Switch
                    checked={item.display}
                    onChange={handleSwitch}
                    name={item.title}
                  />
                </Grid>
              ))}
            </FormGroup>
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        <Box sx={{ ml: 3, mr: 8, pt: 1 }}>
          <Icon className="icon-navbar" sx={{ m: 0.5 }}>
            <img style={{ height: "100%" }} src="/power.svg" />
          </Icon>
          <Icon className="icon-navbar" sx={{ m: 0.5 }}>
            <img style={{ height: "100%" }} src="/setting.svg" />
          </Icon>
          <Icon className="icon-navbar" sx={{ m: 0.5 }}>
            <img style={{ height: "100%" }} src="/refresh.svg" />
          </Icon>
        </Box>
        <HorizontalRuleIcon style={{ transform: "rotate(90deg)" }} />
        <Box>
          <Icon sx={{ mt: 3, height: "100%", width: 200 }}>
            <img style={{ height: "150%" }} src="/tikport.svg" />
          </Icon>
        </Box>
      </div>

      {/* <div className="gap"></div> */}
    </div>
  );
}
