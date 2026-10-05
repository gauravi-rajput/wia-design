import { useEffect } from "react";
import { Avatar, Box, Breadcrumbs, Link, Stack, Tab, Tabs, Typography } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Link as RouterLink, Navigate, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { CLIENTS } from "../data/clients";
import { useRecentClients } from "../hooks/useRecentClients";
import { initials } from "../lib/format";
import { ClientStatusChip } from "../components/StatusChip";

const TABS = [
  { path: "", label: "Wealth context" },
  { path: "recommendation", label: "Recommendation" },
  { path: "review", label: "Advisor review" },
];

function ClientLayout() {
  const { clientId } = useParams<{ clientId: string }>();
  const client = CLIENTS.find((c) => c.id === clientId);
  const { markVisited } = useRecentClients();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (client) markVisited(client.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client?.id]);

  if (!client) {
    return <Navigate to="/" replace />;
  }

  const segments = location.pathname.split("/").filter(Boolean);
  const activeTab = segments[2] ?? "";

  return (
    <Box>
      <Breadcrumbs
        separator={<ChevronRightOutlinedIcon sx={{ fontSize: 14 }} />}
        sx={{ mb: 1.5, "& .MuiBreadcrumbs-li": { display: "flex" } }}
      >
        <Link component={RouterLink} to="/" underline="hover" color="text.secondary" variant="body2">
          Dashboard
        </Link>
        <Typography variant="body2" color="text.primary">
          {client.name}
        </Typography>
      </Breadcrumbs>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ alignItems: { sm: "center" }, justifyContent: "space-between", mb: 2 }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Avatar sx={{ width: 44, height: 44, fontWeight: 700, bgcolor: client.avatarColor }}>
            {initials(client.name)}
          </Avatar>
          <Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="h6">{client.name}</Typography>
              <ClientStatusChip status={client.status} />
            </Stack>
            <Typography variant="caption" color="text.secondary">
              {client.clientCode} · {client.city} · Advisor {client.advisor}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Tabs
        value={activeTab}
        onChange={(_, value) => navigate(value ? `/clients/${client.id}/${value}` : `/clients/${client.id}`)}
        sx={{ mb: 2.5, borderBottom: "1px solid", borderColor: "divider" }}
      >
        {TABS.map((tab) => (
          <Tab key={tab.path} value={tab.path} label={tab.label} sx={{ textTransform: "none", fontWeight: 600 }} />
        ))}
      </Tabs>

      <Outlet context={{ client }} />
    </Box>
  );
}

export default ClientLayout;
