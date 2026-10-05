import { Box, Paper, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  dense?: boolean;
}

function SectionCard({ title, subtitle, action, children, dense }: SectionCardProps) {
  return (
    <Paper variant="outlined" sx={{ p: dense ? 2 : 2.5 }}>
      <Stack
        direction="row"
        sx={{ alignItems: "flex-start", justifyContent: "space-between", mb: subtitle ? 0.25 : 1.5 }}
      >
        <Box>
          <Typography variant="subtitle1">{title}</Typography>
          {subtitle ? (
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1.25 }}>
              {subtitle}
            </Typography>
          ) : null}
        </Box>
        {action}
      </Stack>
      {children}
    </Paper>
  );
}

export default SectionCard;
