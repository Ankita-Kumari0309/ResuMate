// App.js

import React, { useState, useMemo, createContext, useContext } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Context for theme mode
const ThemeModeContext = createContext();
const useThemeMode = () => useContext(ThemeModeContext);

// Navbar with Toggle
function Navbar() {
  const { mode, toggleTheme } = useThemeMode();
  return (
    <AppBar
      position="static"
      sx={{ background: "linear-gradient(to right, #4e54c8, #8f94fb)" }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img src="/logo.png" alt="Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            ResuMate
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

// Sample Home Page
function Home() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to ResuMate
      </Typography>
      <Typography>
        This app helps you optimize your resume using AI and find jobs that suit your profile.
      </Typography>
    </Container>
  );
}

// Main App Component
function App() {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#f5f5f5",
                  paper: "#fff",
                },
              }
            : {
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/signup" element={<div>Signup Page</div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
