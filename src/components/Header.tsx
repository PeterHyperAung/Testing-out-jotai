import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}
      mt={3}
      mb={7}
    >
      <Typography variant="h1">Jotai</Typography>
      <Typography pb="15px">Todo List</Typography>
    </Box>
  );
}
