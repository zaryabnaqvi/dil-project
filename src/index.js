import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01204e',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

ReactDOM.render(
 
    <Router>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </Router>
  ,
  document.getElementById("root")
);

reportWebVitals();
