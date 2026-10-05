import { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Chip,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import { useNavigate } from "react-router-dom";
import { CLIENTS } from "../data/clients";
import { aggregateHoldings, totalCurrentValue } from "../lib/recommendationEngine";
import { formatInrCompact, formatPct, initials } from "../lib/format";
import StatCard from "../components/StatCard";
import { ClientStatusChip } from "../components/StatusChip";
import type { ClientStatus, RiskProfile } from "../types/domain";

const RISK_CHIP_COLOR: Record<RiskProfile, "success" | "warning" | "error" | "default"> = {
  Aggressive: "error",
  Moderate: "warning",
  Conservative: "success",
  Unavailable: "default",
};

type StatusFilter = "all" | ClientStatus;

function Dashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const rows = useMemo(() => {
    return CLIENTS.map((client) => {
      const holdings = aggregateHoldings(client.holdings);
      const aum = totalCurrentValue(holdings);
      const invested = holdings.reduce((s, h) => s + h.amountInvested, 0);
      const returnPct = invested > 0 ? ((aum - invested) / invested) * 100 : null;
      return { client, aum, returnPct };
    });
  }, []);

  const bookAum = rows.reduce((s, r) => s + r.aum, 0);
  const reviewDueCount = CLIENTS.filter((c) => c.status !== "on_track").length;
  const avgReturn =
    rows.filter((r) => r.returnPct != null).reduce((s, r) => s + (r.returnPct ?? 0), 0) /
    Math.max(rows.filter((r) => r.returnPct != null).length, 1);

  const filteredRows = rows.filter(({ client }) => {
    const matchesQuery =
      !query.trim() ||
      client.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      client.clientCode.toLowerCase().includes(query.trim().toLowerCase()) ||
      client.city.toLowerCase().includes(query.trim().toLowerCase());
    const matchesStatus = statusFilter === "all" || client.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  return (
    <Box>
      <Stack sx={{ mb: 2.5 }}>
        <Typography variant="h5">Advisor dashboard</Typography>
        <Typography variant="body2" color="text.secondary">
          Book overview across {CLIENTS.length} clients. Select a client to review their Wealth
          Context and generate recommendations.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2,
          mb: 3,
        }}
      >
        <StatCard
          label="Assets under advice"
          value={formatInrCompact(bookAum)}
          hint={`Across ${CLIENTS.length} clients`}
          icon={<AccountBalanceWalletOutlinedIcon fontSize="small" />}
        />
        <StatCard
          label="Clients"
          value={String(CLIENTS.length)}
          hint="In this book"
          icon={<PeopleOutlinedIcon fontSize="small" />}
        />
        <StatCard
          label="Avg. portfolio return"
          value={formatPct(avgReturn)}
          hint="Absolute return, pooled"
          tone={avgReturn >= 0 ? "success" : "danger"}
          icon={<TrendingUpOutlinedIcon fontSize="small" />}
        />
        <StatCard
          label="Need attention"
          value={String(reviewDueCount)}
          hint="Review due or high risk drift"
          tone={reviewDueCount > 0 ? "warning" : "default"}
          icon={<ReportProblemOutlinedIcon fontSize="small" />}
        />
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ mb: 2, alignItems: { sm: "center" }, justifyContent: "space-between" }}
      >
        <TextField
          size="small"
          placeholder="Search by name, client code, or city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ width: { xs: "100%", sm: 360 } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon fontSize="small" sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            },
          }}
        />
        <ToggleButtonGroup
          size="small"
          value={statusFilter}
          exclusive
          onChange={(_, value) => value && setStatusFilter(value)}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="on_track">On track</ToggleButton>
          <ToggleButton value="review_due">Review due</ToggleButton>
          <ToggleButton value="high_risk">High risk</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <TableContainer sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3, bgcolor: "background.paper" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Risk profile</TableCell>
              <TableCell align="right">AUM</TableCell>
              <TableCell align="right">Return</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map(({ client, aum, returnPct }) => (
              <TableRow
                key={client.id}
                hover
                onClick={() => navigate(`/clients/${client.id}`)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>
                  <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
                    <Avatar sx={{ width: 32, height: 32, fontSize: "0.75rem", bgcolor: client.avatarColor }}>
                      {initials(client.name)}
                    </Avatar>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
                        {client.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {client.clientCode} · Age {client.age ?? "—"}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{client.city}</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    variant="filled"
                    label={client.riskProfile}
                    color={RISK_CHIP_COLOR[client.riskProfile]}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {formatInrCompact(aum)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: (returnPct ?? 0) >= 0 ? "success.main" : "error.main" }}
                  >
                    {formatPct(returnPct, { signed: true })}
                  </Typography>
                </TableCell>
                <TableCell>
                  <ClientStatusChip status={client.status} />
                </TableCell>
              </TableRow>
            ))}
            {filteredRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <Typography variant="body2" color="text.secondary" sx={{ py: 3, textAlign: "center" }}>
                    No clients match this search.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;
