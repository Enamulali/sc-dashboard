import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"; // For the Clubs section
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined"; // For Donations and Bills
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"; // For Expenses
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"; // For FAQ
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"; // For Teams

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
      style={{
        color: selected === title ? colors.greenAccent[500] : colors.grey[100],
        transition: "color 0.3s ease",
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        height: "100vh", // Ensure full viewport height
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          height: "100%", // Ensure the sidebar itself takes up the full height
          transition: "all 0.3s ease",
        },
        "& .ps-menu-button:hover": {
          color: `${colors.greenAccent[500]} !important`,
        },
        "& .ps-menu-button.ps-active": {
          color: `${colors.blueAccent[500]} !important`,
        },
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          background: colors.primary[400],
          height: "100%", // Ensure the Sidebar stretches fully
        }}
      >
        <Menu iconShape="circle">
          {/* Logo and Collapse Button */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* Profile */}
          {!isCollapsed && (
            <Box mb="20px" textAlign="center">
              <img
                alt="profile-user"
                src="/assets/user.png"
                width="80px"
                height="80px"
                style={{ borderRadius: "50%", cursor: "pointer" }}
              />
              <Typography variant="h4" color={colors.grey[100]} mt="10px">
                Salafi Centre
              </Typography>
              <Typography variant="subtitle1" color={colors.greenAccent[500]}>
                Admin Account
              </Typography>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? "0" : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Clubs Section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Clubs
            </Typography>
            <Item
              title="Tuition Club"
              to="/clubs/tuition"
              icon={<SchoolOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Saturday School"
              to="/clubs/saturday"
              icon={<SchoolOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Qur'an School"
              to="/clubs/quran"
              icon={<SchoolOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Other Clubs"
              to="/clubs/other"
              icon={<SchoolOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* New Pages Section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Management
            </Typography>
            <Item
              title="Donations"
              to="/donations"
              icon={<AccountBalanceOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bills"
              to="/bills"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Expenses"
              to="/expenses"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Members"
              to="/teams"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
