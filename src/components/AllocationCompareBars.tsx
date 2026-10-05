import { Box, Stack, Typography } from "@mui/material";
import type { AllocationSlice } from "../types/domain";
import { palette } from "../theme/theme";
import { formatPct } from "../lib/format";

const CLASS_COLOR: Record<string, string> = {
  Equity: palette.info,
  Debt: palette.teal,
  Hybrid: palette.purple,
  Other: palette.textFaint,
};

function AllocationCompareBars({ data }: { data: AllocationSlice[] }) {
  return (
    <Stack spacing={1.75}>
      {data.map((slice) => {
        const delta = slice.currentPct - slice.targetPct;
        const color = CLASS_COLOR[slice.assetClass] ?? palette.textFaint;
        return (
          <Box key={slice.assetClass}>
            <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {slice.assetClass}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formatPct(slice.currentPct)} current · {formatPct(slice.targetPct)} target
                {Math.abs(delta) >= 3 ? (
                  <Box
                    component="span"
                    sx={{ ml: 0.75, color: delta > 0 ? "warning.main" : "info.main", fontWeight: 700 }}
                  >
                    ({delta > 0 ? "+" : ""}
                    {delta.toFixed(0)}pp)
                  </Box>
                ) : null}
              </Typography>
            </Stack>
            <Box sx={{ position: "relative", height: 10, borderRadius: 6, bgcolor: "action.hover", overflow: "visible" }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: `${Math.min(slice.currentPct, 100)}%`,
                  bgcolor: color,
                  borderRadius: 6,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: -3,
                  bottom: -3,
                  left: `${Math.min(slice.targetPct, 100)}%`,
                  width: "2px",
                  bgcolor: "text.primary",
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
}

export default AllocationCompareBars;
