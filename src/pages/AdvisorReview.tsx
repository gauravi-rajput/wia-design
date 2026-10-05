import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Collapse,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useOutletContext } from "react-router-dom";
import type { AdvisorDecision, Client, RecommendedAction } from "../types/domain";
import SectionCard from "../components/SectionCard";
import ActionTypeChip from "../components/ActionTypeChip";
import { buildRecommendationProposal } from "../lib/recommendationEngine";
import { formatInrCompact } from "../lib/format";

const DECISION_OPTIONS: { value: AdvisorDecision; label: string }[] = [
  { value: "ACCEPTED", label: "Accept" },
  { value: "MODIFIED", label: "Modify" },
  { value: "REJECTED", label: "Reject" },
];

function AdvisorReview() {
  const { client } = useOutletContext<{ client: Client }>();
  const proposal = useMemo(() => buildRecommendationProposal(client), [client]);
  const actionableItems = useMemo(
    () => proposal.actions.filter((a) => a.type !== "HOLD"),
    [proposal.actions],
  );

  const [decisions, setDecisions] = useState<Record<string, AdvisorDecision>>({});
  const [comments, setComments] = useState<Record<string, string>>({});
  const [finalized, setFinalized] = useState(false);

  const setDecision = (id: string, value: AdvisorDecision | null) => {
    setDecisions((prev) => ({ ...prev, [id]: value ?? "PENDING" }));
  };

  const pendingCount = actionableItems.filter((a) => (decisions[a.id] ?? "PENDING") === "PENDING").length;
  const decidedCount = actionableItems.length - pendingCount;

  return (
    <Box>
      <Stack sx={{ mb: 2.5 }}>
        <Typography variant="h6">Advisor review &amp; decision</Typography>
        <Typography variant="body2" color="text.secondary">
          {client.name}'s recommended actions requiring a decision. Holds are excluded — nothing
          changes for those by default. Decisions here are kept in this browser session only.
        </Typography>
      </Stack>

      {finalized ? (
        <Alert severity="success" icon={<CheckCircleOutlinedIcon fontSize="small" />} sx={{ mb: 2.5 }}>
          Advisor-approved recommendation recorded for {client.name} — {decidedCount} of{" "}
          {actionableItems.length} items decided.
        </Alert>
      ) : (
        <Alert severity="info" variant="outlined" sx={{ mb: 2.5 }}>
          {pendingCount} of {actionableItems.length} items still need a decision. Claude may assist
          with interpretation and explanations, but validated financial calculations and the final
          investment decision remain the advisor's responsibility.
        </Alert>
      )}

      <SectionCard title="Actions requiring a decision" dense>
        {actionableItems.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
            No exit or add-more candidates this cycle — everything is within target range.
          </Typography>
        ) : (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Scheme</TableCell>
                <TableCell>Proposed</TableCell>
                <TableCell align="right">Current value</TableCell>
                <TableCell>Decision</TableCell>
                <TableCell>Advisor note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {actionableItems.map((action) => (
                <ReviewRow
                  key={action.id}
                  action={action}
                  decision={decisions[action.id] ?? "PENDING"}
                  comment={comments[action.id] ?? ""}
                  onDecision={(v) => setDecision(action.id, v)}
                  onComment={(v) => setComments((prev) => ({ ...prev, [action.id]: v }))}
                />
              ))}
            </TableBody>
          </Table>
        )}
      </SectionCard>

      <Stack direction="row" spacing={1.5} sx={{ justifyContent: "flex-end", mt: 2.5 }}>
        <Button
          variant="contained"
          disabled={actionableItems.length === 0}
          onClick={() => setFinalized(true)}
        >
          Record advisor decision
        </Button>
      </Stack>
    </Box>
  );
}

function ReviewRow({
  action,
  decision,
  comment,
  onDecision,
  onComment,
}: {
  action: RecommendedAction;
  decision: AdvisorDecision;
  comment: string;
  onDecision: (value: AdvisorDecision | null) => void;
  onComment: (value: string) => void;
}) {
  return (
    <>
      <TableRow>
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
        <TableCell>
          <ToggleButtonGroup
            size="small"
            exclusive
            value={decision === "PENDING" ? null : decision}
            onChange={(_, value) => onDecision(value)}
          >
            {DECISION_OPTIONS.map((opt) => (
              <ToggleButton key={opt.value} value={opt.value} sx={{ px: 1.25, fontSize: "0.75rem" }}>
                {opt.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </TableCell>
        <TableCell sx={{ minWidth: 220 }}>
          <Collapse in={decision === "MODIFIED"} unmountOnExit>
            <TextField
              size="small"
              fullWidth
              placeholder="What should change?"
              value={comment}
              onChange={(e) => onComment(e.target.value)}
            />
          </Collapse>
          {decision !== "MODIFIED" ? (
            <Typography variant="caption" color="text.secondary">
              {decision === "PENDING" ? "Awaiting decision" : action.rationale[0]}
            </Typography>
          ) : null}
        </TableCell>
      </TableRow>
    </>
  );
}

export default AdvisorReview;
