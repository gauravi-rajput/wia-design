import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppShell from "../layout/AppShell";
import ClientLayout from "../layout/ClientLayout";
import Dashboard from "../pages/Dashboard";
import ClientWealthContext from "../pages/ClientWealthContext";
import Recommendation from "../pages/Recommendation";
import AdvisorReview from "../pages/AdvisorReview";
import NotFound from "../pages/NotFound";
import { theme } from "../theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<Dashboard />} />
            <Route path="clients/:clientId" element={<ClientLayout />}>
              <Route index element={<ClientWealthContext />} />
              <Route path="recommendation" element={<Recommendation />} />
              <Route path="review" element={<AdvisorReview />} />
            </Route>
            <Route path="clients" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
