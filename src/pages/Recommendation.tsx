import { useMemo } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { Client } from "../types/domain";
import SectionCard from "../components/SectionCard";
import AllocationCompareBars from "../components/AllocationCompareBars";
import ActionTypeChip from "../components/ActionTypeChip";
import { GoalStatusChip } from "../components/StatusChip";
import NavTrendSparkline from "../components/NavTrendSparkline";
import { buildRecommendationProposal } from "../lib/recommendationEngine";
import { formatInrCompact, formatPct } from "../lib/format";

function Recommendation() {
  const { client } = useOutletContext<{ client: Client }>();
  const navigate = useNavigate();
  const proposal = useMemo(() => buildRecommendationProposal(client), [client]);

  const exitCount = proposal.actions.filter((a) => a.type === "EXIT").length;
  const addCount = proposal.actions.filter((a) => a.type === "ADD_MORE").length;

  return (
    <Box>
      <Stack sx={{ mb: 2.5 }}>
        <Typography variant="h6">Recommendation proposal</Typography>
        <Typography variant="body2" color="text.secondary">
          Generated from {client.name}'s Unified Wealth Context, the risk- and horizon-adjusted
          target allocation, and the eligible fund universe. Every figure below is produced by
          deterministic rules — no LLM output.
        </Typography>
      </Stack>

      <Stack spacing={1} sx={{ mb: 2.5 }}>
        {proposal.mismatchWarning ? (
          <Alert severity="warning" icon={<WarningAmberOutlinedIcon fontSize="small" />} variant="filled">
            {proposal.mismatchWarning}
          </Alert>
        ) : null}
        {proposal.notes.map((note) => (
          <Alert key={note} severity="info" icon={<InfoOutlinedIcon fontSize="small" />} variant="outlined">
            {note}
          </Alert>
        ))}
      </Stack>

      {proposal.onboarding ? (
        <SectionCard
          title="Start tracking this client's goals"
          subtitle="Portfolio value is too small for a confident recommendation."
        >
          <Stack spacing={1.5} sx={{ alignItems: "flex-start" }}>
            <Typography variant="body2" color="text.secondary">
              {client.name}'s current book isn't large enough yet to project fund suitability, target
              allocation, or Hold/Add/Exit decisions with any confidence. Start by confirming their goals
              so future contributions have a target to work toward.
            </Typography>
            <Button
              variant="contained"
              startIcon={<FlagCircleOutlinedIcon fontSize="small" />}
              onClick={() => navigate(`/clients/${client.id}`)}
            >
              Go to {client.name}'s goals
            </Button>
          </Stack>
        </SectionCard>
      ) : (
        <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, md: 5 }}>
          <SectionCard
            title="1 · Goal &amp; funding assessment"
            subtitle="Projected corpus per goal at the current allocation and contribution rate."
          >
            <Stack spacing={1.5}>
              {proposal.goalAlignment.map((g) => (
                <Box key={g.goalId} sx={{ p: 1.5, borderRadius: 2, border: "1px solid", borderColor: "divider" }}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {g.goalLabel}
                    </Typography>
                    <GoalStatusChip status={g.status} />
                  </Stack>
                  <Typography variant="caption" color="text.secondary">
                    {g.note}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </SectionCard>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <SectionCard
            title="2 &amp; 3 · Target allocation vs current book"
            subtitle="Suitable categories for this profile, compared against what's already held."
          >
            <AllocationCompareBars data={proposal.allocation} />
          </SectionCard>
        </Grid>

        <Grid size={12}>
          <SectionCard
            title="4 · Proposed investment actions"
            subtitle={`${exitCount} exit candidate${exitCount === 1 ? "" : "s"}, ${addCount} add-more candidate${addCount === 1 ? "" : "s"}, rest held as-is — with rationale and evidence for each.`}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Scheme</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell align="right">Current value</TableCell>
                  <TableCell align="right">Sleeve allocation</TableCell>
                  <TableCell align="right">Goal fit</TableCell>
                  <TableCell>Rationale</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {proposal.actions.map((action) => (
                  <TableRow key={action.id}>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {action.schemeName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {action.assetClass} · {action.subCategory}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <ActionTypeChip type={action.type} />
                    </TableCell>
                    <TableCell align="right">{formatInrCompact(action.currentValue)}</TableCell>
                    <TableCell align="right">
                      <Typography variant="body2">
                        {formatPct(action.currentAllocationPct)} / {formatPct(action.targetAllocationPct)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        current / target
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {action.goalFitPct != null ? (
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {formatPct(action.goalFitPct, { digits: 0 })}
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          —
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell sx={{ maxWidth: 340 }}>
                      {action.rationale.map((r) => (
                        <Typography key={r} variant="caption" color="text.secondary" sx={{ display: "block" }}>
                          {r}
                        </Typography>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
                {proposal.actions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", py: 2 }}>
                        No existing holdings to evaluate.
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
          </SectionCard>
        </Grid>

        <Grid size={12}>
          <SectionCard
            title="New schemes to consider"
            subtitle="Candidates from the eligible fund universe for sleeves that are underweight vs target."
          >
            {proposal.newSchemes.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No new schemes proposed — the current book already covers each target sleeve within
                range.
              </Typography>
            ) : (
              <Grid container spacing={1.5}>
                {proposal.newSchemes.map((suggestion) => {
                  const scheme = suggestion.scheme;
                  return (
                    <Grid key={scheme.id} size={{ xs: 12, sm: 6, md: 4 }}>
                      <Box sx={{ p: 1.5, borderRadius: 2, border: "1px solid", borderColor: "divider", height: "100%" }}>
                        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                          <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap" }}>
                            <Chip size="small" label={scheme.assetClass} variant="outlined" />
                            <Chip size="small" label={`${scheme.riskLevel} risk`} variant="outlined" color="default" />
                            {scheme.lockInYears > 0 ? (
                              <Chip size="small" label={`${scheme.lockInYears}Y lock-in`} color="warning" variant="outlined" />
                            ) : null}
                          </Stack>
                          <Rating value={scheme.rating} readOnly size="small" />
                        </Stack>
                        <Typography variant="body2" sx={{ fontWeight: 600, mt: 0.75 }}>
                          {scheme.schemeName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.75 }}>
                          {scheme.subCategory} · {scheme.amc}
                        </Typography>

                        <NavTrendSparkline schemeName={scheme.schemeName} threeYearCagrPct={scheme.threeYearCagrPct} />

                        <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", mt: 1 }}>
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              3Y CAGR
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {formatPct(scheme.threeYearCagrPct)}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              Expense
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {formatPct(scheme.expenseRatioPct, { digits: 2 })}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              Min SIP / lump sum
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {formatInrCompact(scheme.minSipAmount)} / {formatInrCompact(scheme.minLumpsumAmount)}
                            </Typography>
                          </Box>
                        </Stack>

                        <Box sx={{ mt: 1, pt: 1, borderTop: "1px solid", borderColor: "divider" }}>
                          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="caption" color="text.secondary">
                              {suggestion.matchedGoalLabel
                                ? `Fit for "${suggestion.matchedGoalLabel}"`
                                : "Fit for this risk profile"}
                            </Typography>
                            <Chip
                              size="small"
                              label={`${formatPct(suggestion.goalFitPct, { digits: 0 })} match`}
                              color={suggestion.goalFitPct >= 70 ? "success" : suggestion.goalFitPct >= 40 ? "default" : "warning"}
                            />
                          </Stack>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </SectionCard>
        </Grid>
        </Grid>
      )}

      {!proposal.onboarding ? (
        <Stack direction="row" sx={{ justifyContent: "flex-end", mt: 2.5 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardOutlinedIcon fontSize="small" />}
            onClick={() => navigate(`/clients/${client.id}/review`)}
          >
            Take to advisor review
          </Button>
        </Stack>
      ) : null}
    </Box>
  );
}

export default Recommendation;
