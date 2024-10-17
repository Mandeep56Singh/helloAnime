import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

const Layout = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Box>
  );
};

export default Layout;
