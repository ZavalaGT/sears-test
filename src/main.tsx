import React from "react";
import ReactDOM from "react-dom/client";
import App from "./lib/App";
import "./core/styles/main.css";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import theme from "./core/theme/theme";
import { store } from "./core/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
