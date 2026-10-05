import { Box, Paper, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
  icon?: ReactNode;
  tone?: "default" | "success" | "warning" | "danger";
}

const TONE_COLOR: Record<NonNullable<StatCardProps["tone"]>, string> = {
  default: "text.primary",
  success: "success.main",
  warning: "warning.main",
  danger: "error.main",
};

function StatCard({ label, value, hint, icon, tone = "default" }: StatCardProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.25,
        display: "flex",
        flexDirection: "column",
        gap: 0.75,
        height: "100%",
        minWidth: 0,
      }}
    >
      <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="overline" color="text.secondary">
          {label}
        </Typography>
        {icon ? (
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "8px",
              display: "grid",
              placeItems: "center",
              bgcolor: "action.hover",
              color: "primary.main",
            }}
          >
            {icon}
          </Box>
        ) : null}
      </Stack>
      <Typography variant="h5" sx={{ color: TONE_COLOR[tone] }}>
        {value}
      </Typography>
      {hint ? (
        <Typography variant="caption" color="text.secondary">
          {hint}
        </Typography>
      ) : null}
    </Paper>
  );
}

export default StatCard;
