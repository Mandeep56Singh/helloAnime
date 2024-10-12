import Box from "@mui/material/Box";
const Layout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#201F31",
        color: "#fff",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        padding: 3,
        overflowX: "hidden",
      }}
    >
      Layout
    </Box>
  );
};

export default Layout;
