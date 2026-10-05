import { Chip } from "@mui/material";
import type { ClientStatus, GoalStatus } from "../types/domain";

const CLIENT_STATUS_META: Record<ClientStatus, { label: string; color: "success" | "warning" | "error" }> = {
  on_track: { label: "On track", color: "success" },
  review_due: { label: "Review due", color: "warning" },
  high_risk: { label: "High risk drift", color: "error" },
};

export function ClientStatusChip({ status }: { status: ClientStatus }) {
  const meta = CLIENT_STATUS_META[status];
  return <Chip size="small" label={meta.label} color={meta.color} variant="filled" />;
}

const GOAL_STATUS_META: Record<GoalStatus, { label: string; color: "success" | "warning" | "error" | "default" }> = {
  on_track: { label: "On track", color: "success" },
  at_risk: { label: "At risk", color: "warning" },
  behind: { label: "Behind", color: "error" },
  unavailable: { label: "Data gap", color: "default" },
};

export function GoalStatusChip({ status }: { status: GoalStatus }) {
  const meta = GOAL_STATUS_META[status];
  return <Chip size="small" label={meta.label} color={meta.color} variant="filled" />;
}
