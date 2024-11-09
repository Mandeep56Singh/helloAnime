import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import client from "./graphql/api.ts";
import routes from "./routes/routes.tsx";
import { theme } from "./theme/theme.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes}></RouterProvider>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
