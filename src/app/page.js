import * as React from "react";
import { headers } from "next/headers";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Domains from "@/components/Domains";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" component="h1" fontWeight={700}>
          {headers().get("host")}
        </Typography>
        <Typography variant="h4" fontWeight={600}>
          این دامنه برای فروش می‌باشد.
        </Typography>
        <Domains />
      </Box>
    </Container>
  );
}
