import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { Link, useLocation } from "react-router-dom";

const mainListItems = [
  { text: "Dashboard", icon: <HomeRoundedIcon />, path: "/" },
  { text: "Users", icon: <PeopleRoundedIcon />, path: "/users" },
];

export default function MenuContent() {
  const location = useLocation();
  const selected = mainListItems.findIndex((item) => item.path === location.pathname);

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton selected={selected === index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

