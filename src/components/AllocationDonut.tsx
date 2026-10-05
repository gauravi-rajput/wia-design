import { Box, Stack, Typography } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { AllocationSlice } from "../types/domain";
import { palette } from "../theme/theme";
import { formatPct } from "../lib/format";

const CLASS_COLOR: Record<string, string> = {
  Equity: palette.info,
  Debt: palette.teal,
  Hybrid: palette.purple,
  Other: palette.textFaint,
};

interface AllocationDonutProps {
  data: AllocationSlice[];
  size?: number;
}

function AllocationDonut({ data, size = 170 }: AllocationDonutProps) {
  const chartData = data
    .filter((d) => d.currentPct > 0)
    .map((d) => ({ name: d.assetClass, value: d.currentPct }));

  return (
    <Stack direction="row" spacing={3} sx={{ alignItems: "center", flexWrap: "wrap" }}>
      <Box sx={{ width: size, height: size, flexShrink: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={size * 0.32}
              outerRadius={size * 0.48}
              paddingAngle={2}
              stroke="none"
            >
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={CLASS_COLOR[entry.name] ?? palette.textFaint} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [formatPct(value), name]}
              contentStyle={{
                borderRadius: 8,
                border: `1px solid ${palette.border}`,
                fontSize: 12,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <Stack spacing={1}>
        {data.map((d) => (
          <Stack key={d.assetClass} direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "3px",
                bgcolor: CLASS_COLOR[d.assetClass] ?? palette.textFaint,
                flexShrink: 0,
              }}
            />
            <Typography variant="body2" sx={{ minWidth: 56 }}>
              {d.assetClass}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {formatPct(d.currentPct)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              target {formatPct(d.targetPct)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default AllocationDonut;
