import { Chip } from "@mui/material";
import type { ActionType } from "../types/domain";

const META: Record<ActionType, { label: string; color: "success" | "warning" | "error" | "info" }> = {
  HOLD: { label: "Hold", color: "info" },
  ADD_MORE: { label: "Add more", color: "success" },
  EXIT: { label: "Exit", color: "error" },
  NEW: { label: "New", color: "warning" },
};

function ActionTypeChip({ type }: { type: ActionType }) {
  const meta = META[type];
  return <Chip size="small" label={meta.label} color={meta.color} variant="filled" />;
}

export default ActionTypeChip;
