import { Route, Routes } from "react-router-dom";
import { colourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import ClubsPage from "./scenes/clubs/ClubsPage";
import ClubDetailsPage from "./scenes/clubs/ClubDetailsPage";
import Donations from "./scenes/donations/Donations"; // Ensure this path exists
import Bills from "./scenes/bills/Bills"; // Ensure this path exists
import Expenses from "./scenes/expenses/Expenses"; // Ensure this path exists
import Teams from "./scenes/teams/Teams"; // Ensure this path exists

function App() {
  const [theme, colourMode] = useMode();

  return (
    <colourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* Dashboard Route */}
              <Route path="/" element={<Dashboard />} />

              {/* Clubs Routes */}
              <Route path="/clubs" element={<ClubsPage />} />
              <Route path="/clubs/:id" element={<ClubDetailsPage />} />

              {/* New Management Routes */}
              <Route path="/donations" element={<Donations />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/teams" element={<Teams />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
