import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CLIENTS } from "../data/clients";
import { useRecentClients } from "../hooks/useRecentClients";
import { initials } from "../lib/format";

const DRAWER_WIDTH = 232;
const CURRENT_ADVISOR = { displayName: "Ananya Rao", role: "Senior Wealth Advisor" };

function AppShell() {
  const { recentIds } = useRecentClients();
  const navigate = useNavigate();
  const recentClients = recentIds
    .map((id) => CLIENTS.find((c) => c.id === id))
    .filter((c): c is (typeof CLIENTS)[number] => Boolean(c));

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          bgcolor: "primary.main",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, sm: 64 },
            height: { xs: 56, sm: 64 },
            px: { xs: 2, sm: 3 },
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            spacing={1.25}
            sx={{ alignItems: "center", minWidth: 0, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Box
              aria-hidden
              sx={{
                width: 32,
                height: 32,
                flexShrink: 0,
                display: "grid",
                placeItems: "center",
                borderRadius: "8px",
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.28)",
                color: "primary.contrastText",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.04em",
              }}
            >
              WIA
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                noWrap
                sx={{ color: "primary.contrastText", fontWeight: 600, fontSize: "0.9375rem", lineHeight: 1.25 }}
              >
                Wealth Intelligence Accelerator
              </Typography>
              <Typography noWrap sx={{ color: "#EBCCCC", fontSize: "0.6875rem", lineHeight: 1.3 }}>
                Investment Recommendation · Phase 1–2 prototype
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={1.25}
            sx={{ alignItems: "center", pl: 2, borderLeft: "1px solid rgba(255,255,255,0.22)" }}
          >
            <Avatar
              sx={{ width: 32, height: 32, bgcolor: "#FFFFFF", color: "primary.main", fontSize: "0.75rem", fontWeight: 700 }}
            >
              {initials(CURRENT_ADVISOR.displayName)}
            </Avatar>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography sx={{ color: "primary.contrastText", fontWeight: 600, fontSize: "0.8125rem", lineHeight: 1.25 }}>
                {CURRENT_ADVISOR.displayName}
              </Typography>
              <Typography sx={{ color: "#EBCCCC", fontSize: "0.6875rem", lineHeight: 1.25 }}>
                {CURRENT_ADVISOR.role}
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: { xs: 0, md: DRAWER_WIDTH },
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            top: 64,
            height: "calc(100% - 64px)",
            px: 1.5,
            py: 2,
          },
        }}
      >
        <Typography variant="overline" sx={{ px: 1.25, mb: 1, display: "block" }}>
          Navigate
        </Typography>
        <List dense disablePadding sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 2 }}>
          <NavLink to="/" end style={{ textDecoration: "none", color: "inherit" }}>
            {({ isActive }) => (
              <ListItemButton
                selected={isActive}
                sx={{ py: 1, px: 1.25, borderLeft: 3, borderColor: isActive ? "secondary.main" : "transparent", borderRadius: "0 8px 8px 0" }}
              >
                <ListItemIcon sx={{ minWidth: 34, color: isActive ? "primary.main" : "text.secondary" }}>
                  <SpaceDashboardOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  slotProps={{ primary: { variant: "body2", sx: { fontWeight: isActive ? 600 : 500 } } }}
                />
              </ListItemButton>
            )}
          </NavLink>
        </List>

        {recentClients.length > 0 ? (
          <>
            <Divider sx={{ mb: 1.5 }} />
            <Typography variant="overline" sx={{ px: 1.25, mb: 1, display: "block" }}>
              Recently viewed
            </Typography>
            <List dense disablePadding sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {recentClients.map((client) => (
                <NavLink
                  key={client.id}
                  to={`/clients/${client.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {({ isActive }) => (
                    <ListItemButton
                      selected={isActive}
                      sx={{ py: 0.75, px: 1.25, borderRadius: 1.5, gap: 1 }}
                    >
                      <Avatar sx={{ width: 22, height: 22, fontSize: "0.625rem", bgcolor: client.avatarColor }}>
                        {initials(client.name)}
                      </Avatar>
                      <ListItemText
                        primary={client.name}
                        slotProps={{
                          primary: {
                            variant: "body2",
                            noWrap: true,
                            sx: { fontWeight: isActive ? 600 : 500 },
                          },
                        }}
                      />
                    </ListItemButton>
                  )}
                </NavLink>
              ))}
            </List>
          </>
        ) : null}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          px: { xs: 2, sm: 3.5 },
          py: { xs: 2, sm: 3 },
          mt: { xs: 7, sm: 8 },
          minWidth: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppShell;
