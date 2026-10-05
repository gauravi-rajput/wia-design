import { useMemo } from "react";
import { Box } from "@mui/material";
import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { generateNavHistory } from "../lib/navHistory";
import { palette } from "../theme/theme";

interface NavTrendSparklineProps {
  schemeName: string;
  threeYearCagrPct: number;
  width?: number | string;
  height?: number;
}

/**
 * Minimal NAV trend sparkline — no axes/legend, just the shape of the
 * 2-year move. Data is synthetic (see lib/navHistory.ts); not live NAV.
 */
function NavTrendSparkline({ schemeName, threeYearCagrPct, width = "100%", height = 40 }: NavTrendSparklineProps) {
  const history = useMemo(
    () => generateNavHistory(schemeName, threeYearCagrPct),
    [schemeName, threeYearCagrPct],
  );
  const first = history[0]?.nav ?? 100;
  const last = history[history.length - 1]?.nav ?? 100;
  const trendPct = first > 0 ? ((last - first) / first) * 100 : 0;
  const color = trendPct >= 0 ? palette.success : palette.danger;

  return (
    <Box sx={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={history} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <defs>
            <linearGradient id={`nav-fill-${schemeName}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            formatter={(value: number) => [value.toFixed(2), "NAV"]}
            labelFormatter={() => ""}
            contentStyle={{ borderRadius: 8, border: `1px solid ${palette.border}`, fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="nav"
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#nav-fill-${schemeName})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default NavTrendSparkline;
