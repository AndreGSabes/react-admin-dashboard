import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlinedOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";

import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfd !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <>
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justify="center" align="center">
              <img
                src={`../../assets/user.png`}
                alt="profile-user"
                width="100px"
                height="100px"
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>

            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.gray[100]}
                font-weight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Jonh Doe
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                {" "}
                Owner of Doe Tech
              </Typography>
            </Box>
          </Box>
        )}
      </>
    </Box>
  );
};

export default Sidebar;
