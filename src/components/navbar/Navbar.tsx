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
import { useState } from "react";
import { theme } from "../../theme/theme";
import SearchBar from "../searcbar/Searchbar";

export const Navbar = () => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);

  return (
    <Box>
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
            component={"div"}
            sx={{
              flexGrow: 1,
              display: "flex",
             
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
