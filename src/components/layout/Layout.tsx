import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

const Layout = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box sx={{
        py:4,
        px:2
      }}>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Layout;
