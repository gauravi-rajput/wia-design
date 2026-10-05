import { Box, Stack, Typography } from "@mui/material";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import type { WealthSignal } from "../types/domain";
import { palette } from "../theme/theme";

const TAG_META: Record<
  WealthSignal["tag"],
  { color: string; bg: string; icon: typeof ReportProblemOutlinedIcon }
> = {
  CONCERN: { color: palette.warning, bg: palette.warningSoft, icon: ReportProblemOutlinedIcon },
  PREFERENCE: { color: palette.purple, bg: palette.purpleSoft, icon: FavoriteBorderOutlinedIcon },
  COMMITMENT: { color: palette.info, bg: palette.infoSoft, icon: HandshakeOutlinedIcon },
  OPPORTUNITY: { color: palette.success, bg: palette.successSoft, icon: TrendingUpOutlinedIcon },
};

function SignalCallout({ signal }: { signal: WealthSignal }) {
  const meta = TAG_META[signal.tag];
  const Icon = meta.icon;
  return (
    <Stack
      direction="row"
      spacing={1.25}
      sx={{
        p: 1.25,
        borderRadius: 2,
        bgcolor: meta.bg,
        alignItems: "flex-start",
      }}
    >
      <Icon sx={{ fontSize: 18, color: meta.color, mt: "1px", flexShrink: 0 }} />
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="overline"
          sx={{ color: meta.color, display: "block", lineHeight: 1.4 }}
        >
          {signal.tag}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {signal.text}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Source: {signal.source}
        </Typography>
      </Box>
    </Stack>
  );
}

export default SignalCallout;
