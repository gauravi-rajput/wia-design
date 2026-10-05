import { alpha, createTheme } from "@mui/material/styles";

/**
 * WIA design system — polished pass over the Figma Phase 1–2 tokens
 * (maroon header, warm off-white canvas, gold accent). Kept the brand
 * palette; added a proper elevation scale, consistent radii, and
 * component-level refinement so dense advisor screens still feel calm.
 */
export const palette = {
  header: "#7A1721",
  headerDark: "#5C1018",
  bg: "#F7F7F5",
  surface: "#FFFFFF",
  surfaceSunken: "#F1F1EC",
  border: "#E5E3DC",
  borderStrong: "#D4D1C7",
  accent: "#B87812",
  accentSoft: "#EBCCCC",
  text: "#2E2C2C",
  textMuted: "#6B6B6B",
  textFaint: "#95928A",
  success: "#2E7D33",
  successSoft: "#E5F1E6",
  warning: "#B87812",
  warningSoft: "#FBF0DF",
  danger: "#B0242E",
  dangerSoft: "#FBE7E8",
  info: "#1C5EA8",
  infoSoft: "#E7F0FA",
  teal: "#0F6E54",
  tealSoft: "#E2F1EC",
  purple: "#544AA8",
  purpleSoft: "#EBE9F7",
};

export const chartColors = [
  palette.info,
  palette.teal,
  palette.purple,
  palette.accent,
  palette.textFaint,
];

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.header,
      dark: palette.headerDark,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: palette.accent,
      contrastText: "#FFFFFF",
    },
    success: { main: palette.success },
    warning: { main: palette.warning },
    error: { main: palette.danger },
    info: { main: palette.info },
    text: {
      primary: palette.text,
      secondary: palette.textMuted,
      disabled: palette.textFaint,
    },
    background: {
      default: palette.bg,
      paper: palette.surface,
    },
    divider: palette.border,
    action: {
      hover: alpha(palette.header, 0.04),
      selected: alpha(palette.header, 0.08),
      focus: alpha(palette.header, 0.12),
      disabled: alpha(palette.text, 0.26),
      disabledBackground: alpha(palette.text, 0.08),
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    h4: { fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.015em" },
    h5: { fontWeight: 700, fontSize: "1.375rem", letterSpacing: "-0.01em" },
    h6: { fontWeight: 600, fontSize: "1.0625rem" },
    subtitle1: { fontWeight: 600, fontSize: "0.9375rem", lineHeight: 1.35 },
    subtitle2: { fontWeight: 600, fontSize: "0.8125rem", lineHeight: 1.35, color: palette.textMuted },
    body1: { fontSize: "0.875rem", lineHeight: 1.5 },
    body2: { fontSize: "0.8125rem", lineHeight: 1.45 },
    caption: { fontSize: "0.75rem", lineHeight: 1.4, color: palette.textMuted },
    overline: { fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.07em" },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: { borderRadius: 10 },
  shadows: [
    "none",
    "0 1px 2px rgba(35,30,20,0.06)",
    "0 1px 3px rgba(35,30,20,0.08)",
    "0 2px 6px rgba(35,30,20,0.08)",
    "0 2px 8px rgba(35,30,20,0.09)",
    "0 4px 10px rgba(35,30,20,0.10)",
    "0 4px 12px rgba(35,30,20,0.10)",
    "0 6px 16px rgba(35,30,20,0.11)",
    "0 6px 18px rgba(35,30,20,0.11)",
    "0 8px 20px rgba(35,30,20,0.12)",
    "0 8px 22px rgba(35,30,20,0.12)",
    "0 10px 24px rgba(35,30,20,0.12)",
    "0 10px 26px rgba(35,30,20,0.13)",
    "0 12px 28px rgba(35,30,20,0.13)",
    "0 12px 30px rgba(35,30,20,0.13)",
    "0 14px 32px rgba(35,30,20,0.14)",
    "0 14px 34px rgba(35,30,20,0.14)",
    "0 16px 36px rgba(35,30,20,0.14)",
    "0 16px 38px rgba(35,30,20,0.15)",
    "0 18px 40px rgba(35,30,20,0.15)",
    "0 18px 42px rgba(35,30,20,0.15)",
    "0 20px 44px rgba(35,30,20,0.16)",
    "0 20px 46px rgba(35,30,20,0.16)",
    "0 22px 48px rgba(35,30,20,0.16)",
    "0 22px 50px rgba(35,30,20,0.17)",
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { margin: 0, backgroundColor: palette.bg },
      },
    },
    MuiAppBar: { defaultProps: { elevation: 0 } },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: `1px solid ${palette.border}`,
          backgroundColor: palette.surface,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600, borderRadius: 8 },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        sizeSmall: { paddingInline: 12 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, fontSize: "0.6875rem", height: 24, borderRadius: 6 },
        colorSuccess: {
          "&.MuiChip-filled": { backgroundColor: palette.successSoft, color: palette.success },
        },
        colorWarning: {
          "&.MuiChip-filled": { backgroundColor: palette.warningSoft, color: "#8A5A0E" },
        },
        colorError: {
          "&.MuiChip-filled": { backgroundColor: palette.dangerSoft, color: palette.danger },
        },
        colorInfo: {
          "&.MuiChip-filled": { backgroundColor: palette.infoSoft, color: palette.info },
        },
        colorDefault: {
          "&.MuiChip-filled": { backgroundColor: alpha(palette.textMuted, 0.12), color: palette.textMuted },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: alpha(palette.header, 0.08),
            "&:hover": { backgroundColor: alpha(palette.header, 0.12) },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { backgroundColor: palette.surface, borderRadius: 8 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
        outlined: { borderColor: palette.border },
        rounded: { borderRadius: 12 },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
          fontSize: "0.6875rem",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          color: palette.textMuted,
          backgroundColor: palette.surfaceSunken,
          borderBottom: `1px solid ${palette.border}`,
        },
        body: { borderBottom: `1px solid ${palette.border}` },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.text,
          fontSize: "0.6875rem",
          padding: "6px 10px",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 6, height: 8, backgroundColor: alpha(palette.text, 0.08) },
      },
    },
  },
});
