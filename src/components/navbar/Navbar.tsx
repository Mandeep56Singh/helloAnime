import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  AppBar,
  Backdrop,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../../theme/theme";
import SearchBar from "../search/Searchbar";
import { StyledDrawerHeader } from "../styled components/StyledDrawerHeader";

export const Navbar = () => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const location = useLocation();

  /** The format the media was released in */

  const FormatType = [
    "TV",
    "MOVIE",
    "OVA",
    "ONA",
    "SPECIAL",
    "TV_SHORT",
    "MUSIC",
  ];
  const titles = ["Home", "Most Popular", ...FormatType];

  const links = [
    "/",
    "most-popular",
    ...FormatType.map((type) => `/format/${type}`),
  ];
  useEffect(() => {
    setSearchToggle(false);
  }, [location]);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 99,
      }}
    >
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
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant={"h4"}
            component={Link}
            to="/"
            sx={{
              display: "flex",
              textDecoration: "none",
              color: "text.primary",
              marginRight: "auto",
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
                mr: "5px",
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
      <Backdrop
        open={menuToggle}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer - 1,
          backdropFilter: "blur(8px)",
        }}
      >
        <Drawer
          anchor="left"
          open={menuToggle}
          onClose={handleMenuToggle}
          PaperProps={{
            sx: (theme) => ({
              width: "300px",
              padding: "24px 12px",
              boxSizing: "border-box",
              backgroundColor: alpha(theme.palette.primary.main, 0.6),
            }),
          }}
        >
          <StyledDrawerHeader>
            <Button
              onClick={handleMenuToggle}
              sx={{
                padding: "8px 16px",
                border: 1,
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "text.primary",
              }}
            >
              <ChevronLeftIcon></ChevronLeftIcon>
              <Typography variant="button">Close Menu</Typography>
            </Button>
          </StyledDrawerHeader>
          <List sx={{ marginTop: 2 }}>
            {titles.map((text, i) => (
              <Box key={`${text}-${i}`}>
                <ListItem disablePadding>
                  <Link
                    to={`${links[i]}`}
                    onClick={handleMenuToggle}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        ":hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <ListItemText
                        primary={text}
                        sx={{
                          ":hover": {
                            color: "text.secondary",
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
                {i < titles.length - 1 && (
                  <Divider
                    sx={{
                      backgroundColor: grey[600],
                      my: 0.5,
                    }}
                  />
                )}
              </Box>
            ))}
          </List>
        </Drawer>
      </Backdrop>
      {searchToggle ? <SearchBar></SearchBar> : null}
    </Box>
  );
};
