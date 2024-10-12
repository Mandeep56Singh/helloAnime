import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
export const Navbar = () => {
  return (

      <AppBar position={"sticky"} aria-label="navbar">
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
          <Typography variant={"h5"} component={"div"} sx={{ flexGrow: 1 }}>
            Hello!Anime
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    // </Box>
  );
};
