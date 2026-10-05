import { useMemo } from "react";
import { Alert, Box, Button, Chip, Divider, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { AssetClass, Client } from "../types/domain";
import SectionCard from "../components/SectionCard";
import AllocationDonut from "../components/AllocationDonut";
import SignalCallout from "../components/SignalCallout";
import NavTrendSparkline from "../components/NavTrendSparkline";
import {
  ASSUMED_CAGR,
  aggregateHoldings,
  checkRiskAlignment,
  computeCurrentAllocation,
  computeTargetAllocation,
  totalCurrentValue,
} from "../lib/recommendationEngine";
import { formatInr, formatInrCompact, formatPct } from "../lib/format";

function ClientWealthContext() {
  const { client } = useOutletContext<{ client: Client }>();
  const navigate = useNavigate();

  const holdings = useMemo(() => aggregateHoldings(client.holdings), [client]);
  const aum = totalCurrentValue(holdings);
  const invested = holdings.reduce((s, h) => s + h.amountInvested, 0);
  const returnPct = invested > 0 ? ((aum - invested) / invested) * 100 : null;

  const current = computeCurrentAllocation(holdings);
  const { target } = computeTargetAllocation(client);
  const mismatchWarning = aum > 0 ? checkRiskAlignment(client, current) : null;
  const allocation = (Object.keys(target) as (keyof typeof target)[])
    .filter((ac) => ac !== "Other" || current.Other > 0)
    .map((ac) => ({
      assetClass: ac,
      currentPct: Math.round(current[ac] * 10) / 10,
      targetPct: Math.round(target[ac] * 10) / 10,
      currentValue: (current[ac] / 100) * aum,
    }));

  const holdingsByClass = useMemo(() => {
    const groups = new Map<AssetClass, typeof holdings>();
    for (const h of holdings) {
      const arr = groups.get(h.assetClass) ?? [];
      arr.push(h);
      groups.set(h.assetClass, arr);
    }
    return groups;
  }, [holdings]);

  return (
    <Box>
      {mismatchWarning ? (
        <Alert
          severity="warning"
          icon={<WarningAmberOutlinedIcon fontSize="small" />}
          variant="filled"
          sx={{ mb: 2.5 }}
        >
          {mismatchWarning}
        </Alert>
      ) : null}
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={2.5}>
            <SectionCard title="Client profile">
              <Stack spacing={1.1}>
                <ProfileRow label="Age" value={client.age != null ? `${client.age} years` : "—"} />
                <ProfileRow label="Marital status" value={client.maritalStatus ?? "—"} />
                <ProfileRow label="Dependants" value={client.dependants != null ? String(client.dependants) : "—"} />
                <ProfileRow label="Risk profile" value={client.riskProfile} highlight={client.riskProfile === "Unavailable"} />
                <Divider sx={{ my: 0.5 }} />
                <ProfileRow label="Email" value={client.email} />
                <ProfileRow label="Phone" value={client.phone} />
              </Stack>
            </SectionCard>

            <SectionCard title="Portfolio summary">
              <Stack spacing={1.1}>
                <ProfileRow label="Current value" value={formatInrCompact(aum)} strong />
                <ProfileRow label="Amount invested" value={formatInrCompact(invested)} />
                <ProfileRow
                  label="Absolute return"
                  value={formatPct(returnPct, { signed: true })}
                  tone={(returnPct ?? 0) >= 0 ? "success" : "danger"}
                />
                <ProfileRow label="Distinct schemes" value={String(holdings.length)} />
              </Stack>
            </SectionCard>

            <Button
              variant="contained"
              fullWidth
              startIcon={<AutoAwesomeOutlinedIcon fontSize="small" />}
              onClick={() => navigate(`/clients/${client.id}/recommendation`)}
            >
              Generate recommendation
            </Button>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={2.5}>
            <SectionCard title="Goals" subtitle="Funding needs that shape the target allocation and recommendation.">
              <Grid container spacing={1.5}>
                {client.goals.map((goal) => (
                  <Grid key={goal.id} size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, border: "1px solid", borderColor: "divider" }}>
                      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {goal.label}
                        </Typography>
                        <Chip size="small" label={goal.priority} variant="outlined" />
                      </Stack>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                        {goal.type} · Target {goal.targetYear}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                        {formatInrCompact(goal.targetAmount)}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
                {client.goals.length === 0 ? (
                  <Grid size={12}>
                    <Typography variant="body2" color="text.secondary">
                      No goals on file for this client yet.
                    </Typography>
                  </Grid>
                ) : null}
              </Grid>
            </SectionCard>

            <SectionCard title="Allocation" subtitle="Current mix vs the risk- and horizon-adjusted target.">
              <AllocationDonut data={allocation} />
            </SectionCard>

            <SectionCard title="Holdings" subtitle="Pooled across all lots per scheme.">
              <Stack spacing={2}>
                {Array.from(holdingsByClass.entries()).map(([assetClass, rows]) => (
                  <Box key={assetClass}>
                    <Typography variant="subtitle2" sx={{ mb: 0.75 }}>
                      {assetClass}
                    </Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Scheme</TableCell>
                          <TableCell>2Y trend</TableCell>
                          <TableCell align="right">Invested</TableCell>
                          <TableCell align="right">Current</TableCell>
                          <TableCell align="right">Return</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((h) => (
                          <TableRow key={h.schemeName}>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {h.schemeName}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {h.subCategory}
                                {h.lotCount > 1 ? ` · ${h.lotCount} lots` : ""}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ width: 100 }}>
                              <NavTrendSparkline
                                schemeName={h.schemeName}
                                threeYearCagrPct={ASSUMED_CAGR[assetClass] * 100}
                                width={90}
                                height={28}
                              />
                            </TableCell>
                            <TableCell align="right">{formatInr(h.amountInvested)}</TableCell>
                            <TableCell align="right">{formatInr(h.currentValue)}</TableCell>
                            <TableCell align="right">
                              <Typography
                                variant="body2"
                                sx={{ color: (h.absReturnPct ?? 0) >= 0 ? "success.main" : "error.main", fontWeight: 600 }}
                              >
                                {formatPct(h.absReturnPct, { signed: true })}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                ))}
                {holdings.length === 0 ? (
                  <Typography variant="body2" color="text.secondary">
                    No holdings on file.
                  </Typography>
                ) : null}
              </Stack>
            </SectionCard>

            {client.signals.length > 0 ? (
              <SectionCard title="Wealth signals" subtitle="Concerns, preferences, commitments and opportunities noted for this client.">
                <Stack spacing={1}>
                  {client.signals.map((signal) => (
                    <SignalCallout key={signal.id} signal={signal} />
                  ))}
                </Stack>
              </SectionCard>
            ) : null}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function ProfileRow({
  label,
  value,
  strong,
  highlight,
  tone,
}: {
  label: string;
  value: string;
  strong?: boolean;
  highlight?: boolean;
  tone?: "success" | "danger";
}) {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: strong ? 700 : 600,
          color: highlight ? "warning.main" : tone === "success" ? "success.main" : tone === "danger" ? "error.main" : "text.primary",
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

export default ClientWealthContext;
