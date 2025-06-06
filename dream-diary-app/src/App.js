import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewDreamPage from "./pages/NewDreamPage";
import DreamDetailPage from "./pages/DreamDetailPage";
import EditDreamPage from "./pages/EditDreamPage";

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#2c3e50", // A deep blue-grey
    },
    secondary: {
      main: "#1abc9c", // A turquoise/teal
    },
    background: {
      default: "#ecf0f1", // Light grey background
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "\"Segoe UI\"",
      "Roboto",
      "\"Helvetica Neue\"",
      "Arial",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\"",
    ].join(","),
    h4: {
        fontWeight: 600,
    },
    h5: {
        fontWeight: 500,
    },
    // Add other typography customizations if needed
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<NewDreamPage />} />
            <Route path="/dreams/:id" element={<DreamDetailPage />} />
            <Route path="/dreams/:id/edit" element={<EditDreamPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
