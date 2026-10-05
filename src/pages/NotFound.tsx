import { Box, Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function NotFound() {
  return (
    <Box sx={{ py: 10, textAlign: "center" }}>
      <Stack spacing={1.5} sx={{ alignItems: "center" }}>
        <Typography variant="h4">Page not found</Typography>
        <Typography variant="body2" color="text.secondary">
          That page doesn't exist in this prototype.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" sx={{ mt: 1 }}>
          Back to dashboard
        </Button>
      </Stack>
    </Box>
  );
}

export default NotFound;
