import * as React from "react";
import { headers } from "next/headers";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Domains from "@/components/Domains";

export default function Home() {
  const host = headers().get("host");
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
        <Typography
          dir="ltr"
          variant="h2"
          component="h1"
          textAlign="center"
          fontWeight={700}
        >
          {host}
        </Typography>
        <Typography variant="h5" textAlign="center" fontWeight={600}>
          این دامنه برای فروش می‌باشد.
        </Typography>
        <Domains host={host} />
      </Box>
    </Container>
  );
}
