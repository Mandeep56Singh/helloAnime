import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../../theme/theme";
import SearchBar from "../search/Searchbar";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const location  = useLocation();

  useEffect(() => {
    setSearchToggle(false);
  },[location])
  return (
    <Box sx={{
      position:'absolute',
      width:"100%",
      top:0,
      left:0,
      zIndex:99
    }}>
      <AppBar
        position={"sticky"}
        aria-label="navbar"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant={"h4"}
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: "flex",
             textDecoration:"none",
             color:"text.primary"
            }}
          >
            hello
            <Box color={theme.palette.text.secondary}>!</Box>
            anime
          </Typography>
          <IconButton onClick={() => setSearchToggle((s) => !s)}>
            <SearchIcon
              sx={{
                color: searchToggle ? "secondary.main" : "#FFF",
                mr:"5px"
              }}
            ></SearchIcon>
          </IconButton>

          <Button
            sx={{
              background: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {searchToggle ? <SearchBar></SearchBar> : null}
    </Box>
  );
};
