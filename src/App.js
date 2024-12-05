import { Route, Routes } from "react-router-dom";
import { colourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";

function App() {
  const [theme, colourMode] = useMode();

  return (
    <colourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
